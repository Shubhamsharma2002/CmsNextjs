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
    content
  }) => {
     console.log(slug,"slug");
     console.log(ogImage);
     console.log(content);
     
     
  };
  return (
    <div className="p-8">
      <Editor onSave={savePost} />
    </div>
  );
}
