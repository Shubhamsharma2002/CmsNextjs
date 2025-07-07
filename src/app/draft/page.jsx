"use client"
import Editor from "@/components/editor";
import { NextResponse } from "next/server";

export default function Draftblog() {
   const savePost = async({title,excerpt,category,ogImage,keywords,metaDescription,status ,slug,content})=>{
      //  console.log("title",title);
      //  console.log("excerpt",excerpt);
      //  console.log("cate",category);
      //  console.log("ogimage",ogImage);
      //  console.log("keywords",keywords);
      //  console.log("metdes",metaDescription);
      //  console.log("status",status);
      //  console.log("content",content);
      //  console.log("slug",slug);
       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create`,{
             method:"POST",
             headers:{
              'Content-Type':'application/json',
             }
             ,body:JSON.stringify({title,excerpt,category,ogImage,keywords,metaDescription,status ,slug,content})
       })
       if(!res.ok){
        // console.log(res);
        
        throw new Error("post not saved")
       }

        console.log(res.json());
        
   }
  return (
    <div className="p-8">
      {/* onSave={savePost}  */}
      <Editor onSave={savePost} />
    </div>
  );
}
