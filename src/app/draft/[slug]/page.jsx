"use client";
import React, { useEffect, useState } from "react";
import Editor from "@/components/Editor";
import { toast } from "sonner";


export default function EditPreviousDraft({ params }){
    const { slug } = React.use(params);
    console.log("slug",slug);
    
    const [post, setPost ] = useState();

    useEffect(()=> {
        const fetchPost = async()=> {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update/${slug}`);
            if(!res.ok){
                if(res.status === 403){
                    toast({
                        title: "Uh oh!",
                        description: 'You are not allowed to edit the post'
                    })
                }
                else toast({
                    title: "Uh oh!",
                    description: 'Unable to load post'
                })
            }
            const response = await res.json();
            console.log(response, ' direct before saving')
            setPost(response);
        }
        fetchPost();
    }, [slug])


    const savePost = async({ title, ogImage, content, excerpt, metaDescription, category, keywords, status }) => {
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update/${slug}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, ogImage, content, excerpt, metaDescription, keywords, status })
        })
        if(!res.ok){
            throw new Error('Post updating failed');
        }
    }
    if(!post){
        return <></>;
    }
   console.log("📤 Passing post to Editor:", post);
    
    return <div className="p-8">
        <h1 className="font-bold text-2xl pb-3">Create a new Post</h1>
        <Editor onSave={savePost} initialData={post} />
    </div>
}