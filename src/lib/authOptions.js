import { prisma } from "@/lib/prisma"; // ✅ Prisma client (singleton setup)
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET, // ✅ required for JWT

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/sign-in",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: {
            id: true,
            name: true,
            email: true,
            username: true,
            image: true,
            role: true,
          },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.name = dbUser.name;
          token.email = dbUser.email;
          token.username = dbUser.username;
          token.image = dbUser.image;
          token.role = dbUser.role;
        } else {
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              role: "user",
            },
          });
          token.id = newUser.id;
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.image = token.image;
        session.user.role = token.role;
      }
      return session;
    },

    redirect() {
      return "/dashboard";
    },
  },
};

// ✅ For server-only usage (server components, API routes)
export const getAuthsession = () => getServerSession(authOptions);
