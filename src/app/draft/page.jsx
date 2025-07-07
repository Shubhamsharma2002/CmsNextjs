"use client"
import Editor from "@/components/editor";

export default function Draftblog() {
   const savePost = ({title,excerpt,category,ogImage,keywords,metaDescription,status ,slug,content})=>{
      //  console.log("title",title);
      //  console.log("excerpt",excerpt);
      //  console.log("cate",category);
      //  console.log("ogimage",ogImage);
      //  console.log("keywords",keywords);
      //  console.log("metdes",metaDescription);
      //  console.log("status",status);
      //  console.log("content",content);
      //  console.log("slug",slug);

        
   }
  return (
    <div className="p-8">
      {/* onSave={savePost}  */}
      <Editor onSave={savePost} />
    </div>
  );
}
