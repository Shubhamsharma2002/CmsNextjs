"use client"
import Editor from "@/components/editor";

export default function Draftblog() {
  const savePost = ({
    title,
    slug,
    excerpt,
    category,
    keywords,
    ogImage,
    metaDescription,
    status,
  }) => {
     console.log(slug,"slug");
     
  };
  return (
    <div className="p-8">
      <Editor onSave={savePost} />
    </div>
  );
}
