import { getAuthsession } from "@/lib/authOptions";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// export async function POST(request) {
//   try {
//     const session = await getAuthsession();
//     console.log("Session:", session);

//     if (!session || !session.user) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     const body = await request.json();
//     const { title, slug, ogImage, content, excerpt, metaDescription, category, keywords, status } = body;

//     console.log("Body received:", body);

//     if (!title || !content || !slug || !category || !session.user.id) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     const statusOfPost = status || "DRAFT";
//      console.log("Checking category slug:", category);
//     let categoryCheck = await prisma.category.findUnique({ where: { slug: category } });

//     if (!categoryCheck) {
//       categoryCheck = await prisma.category.create({
//         data: {
//           title: category.charAt(0).toUpperCase() + category.slice(1),
//           slug: category
//         }
//       });
//     }

//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         slug,
//         thumbnail: ogImage || null,
//         desc: metaDescription || null,
//         keywords: keywords || null,
//         excerpt: excerpt || null,
//         authorId: session.user.id,
//         catSlug: categoryCheck.slug,
//         status: statusOfPost
//       }
//     });

//     console.log("Post saved:", post);
//     return NextResponse.json(post, { status: 201 });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({ message: "Could not save post" }, { status: 500 });
//   }
// }

export async function GET() {
  return NextResponse.json({ message: "yes working" });
}

export async function POST(request) {
  const session = await getAuthsession();
  console.log("Session:", session);
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const {
    title,
    excerpt,
    category,
    ogImage,
    keywords,
    metaDescription,
    status,
    slug,
    content,
  } = body;
  if (!title || !content || !slug || !category || !session.user.id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }
  const statusOfPost = status || "DRAFT";
 try {
        let categoryCheck = await prisma.category.findUnique({
            where: { slug: category }
        })
    console.log('categoryCheck first:', categoryCheck);
        if(!categoryCheck){
            categoryCheck = await prisma.category.create({
                data: {
                    title: category.charAt(0).toUpperCase() + category.slice(1),
                    slug: category
                }
            })
            
        }
    console.log('categoryCheck second:', categoryCheck);
        const post = await prisma.post.create({
            data: {
                title,
                content,
                slug,
                thumbnail: ogImage || null,
                desc: metaDescription || null,
                keywords: keywords || null,
                excerpt: excerpt || null,
                authorId: session.user.id,
                catSlug: categoryCheck.slug,
                status: statusOfPost
            }
        })
        return NextResponse.json(post, { status: 201 })
    } catch (error) {
        console.log("error",error);
        
        console.log(error.message);
        return NextResponse.json({ message: "Could not save post"}, { status: 500 })
    }
}
