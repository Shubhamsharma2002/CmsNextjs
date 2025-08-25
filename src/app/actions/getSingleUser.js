import { prisma } from "@/lib/prisma";

export async function getSingleUser(username) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      name: true,
      image: true,
      createdAt: true,
      username: true,
      Post: {
        select: {
          title: true,
          slug: true,
          thumbnail: true,
          excerpt: true,
        },
      },
    },
  });
  return user;
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id }, // MongoDB ObjectId string
      select: {
        name: true,
        image: true,
        createdAt: true,
        username: true,
        Post: {
          select: {
            title: true,
            slug: true,
            thumbnail: true,
            excerpt: true,
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
