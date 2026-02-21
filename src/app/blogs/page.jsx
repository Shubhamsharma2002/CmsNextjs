import Image from "next/image";
import Link from "next/link";

const fetchAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get`);
  const data = await res.json();
  return data;
};

export default async function Blogs() {
  const blogData = await fetchAllBlogs();
  return (
    <section className="py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.thumbnail}
            url={blog.slug}
          />
        ))}
      </div>
    </section>
  );
}

const BlogCard = ({ title, excerpt, image, url }) => {
  return (
    <div
      className="bg-gray-600/20 rounded-lg border flex flex-col p-4 gap-3
                    hover:scale-[1.03] transition-transform duration-300 
                    w-full max-w-[320px] mx-auto text-center"
    >
      {image && (
        <Image
          className="w-full rounded-md"
          src={image}
          width={300}
          height={170}
          alt={title}
        />
      )}
      <h2 className="text-xl font-bold text-gray-200">{title}</h2>
      <p className="text-sm text-gray-400">{excerpt}</p>
      <Link
        className="bg-zinc-600/70 py-2 px-4 rounded text-xs text-white mx-auto hover:bg-zinc-500"
        href={`/blog/${url}`}
      >
        Read More
      </Link>
    </div>
  );
};
