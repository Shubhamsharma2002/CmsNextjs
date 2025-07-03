'use client';

import { Form, useForm } from 'react-hook-form';
import { useState } from 'react';
import Tiptap from './textEditor/TipTapEditor';
import { slugify } from 'slugmaster';
import ImageUpload from './imageUpload';

export default function Editor({ onSave }) {
  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState("");
  const [ogImage , setOgImage] = useState("")
  const handlleChange = (value)=>{
    console.log(value);
    
     setContent(value)
  }
  const handleForm = (data)=>{
   console.log(data, "Full form data including TipTap");
   const genratedSlug = slugify(data.title)
      onSave({...data, slug:genratedSlug,ogImage,content})
  }
 return(
       <section>
        <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
           <input
          {...register("title")}
          placeholder="Enter the post title"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <Tiptap value={content} onChange={handlleChange} />
         <input
          {...register("excerpt")}
          placeholder="Enter an excerpt"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <input
          {...register("category")}
          placeholder="Enter a category"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
         <h2 className="text-xl font-bold"> SEO Data</h2>
           <ImageUpload returnImage={setOgImage} preloadedImage={ogImage} />
         <input
          {...register("keywords")}
          placeholder="Enter Keywords"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />

        <input
          {...register("metaDescription")}
          placeholder="Enter Meta Description"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
         <div className="flex gap-2">
            <select
                {...register("status")}
                className="font-bold text-lg bg-zinc-600 px-3 py-1 rounded-sm outline-none"
            >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Publish</option>
            </select>
            <button
                type="submit"
                className="bg-zinc-800 px-3 py-2 rounded cursor-pointer"
                >
                Save
            </button>
        </div>
        </form>
       </section>
 )

}
