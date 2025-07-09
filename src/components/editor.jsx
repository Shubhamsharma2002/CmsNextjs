'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Tiptap from './textEditor/TipTapEditor';
import { slugify } from 'slugmaster';
import ImageUpload from './imageUpload';

export default function Editor({ onSave, initialData }) {
  const { register, handleSubmit, setValue } = useForm();
  const [content, setContent] = useState('');
  const [ogImage, setOgImage] = useState('');
 const handleChange = (value) => {
    
    setContent(value);
  };
  // Log when initialData is received
  useEffect(() => {
   

    if (initialData) {
      setValue('title', initialData.title || '');
      setValue('keywords', initialData.keywords || '');
      setValue('category', initialData.catSlug || '');
      setValue('excerpt', initialData.excerpt || '');
      setValue('metaDescription', initialData.desc || '');
      setValue('status', initialData.status || 'DRAFT');

      const safeContent = initialData.content || '<p></p>';
      // console.log('🧾 Setting content in state:', safeContent);
      setContent(safeContent);

      const safeThumbnail = initialData.thumbnail || '';
      // console.log('🖼️ Setting thumbnail:', safeThumbnail);
      setOgImage(safeThumbnail);
    }
  }, [initialData, setValue]);
// console.log("🧠 Final content passed to Tiptap:", content);
  // Log content whenever it changes via TipTap
 

  const handleForm = (data) => {
    const generatedSlug = slugify(data.title);
    const fullPayload = {
      ...data,
      slug: generatedSlug,
      ogImage,
      content,
    };

    // console.log('🚀 Submitting form with values:', fullPayload);
    onSave(fullPayload);
  };

  return (
    <section>
      <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
        <input
          {...register('title')}
          placeholder="Enter the post title"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />

        {typeof content === 'string' ? (
          <>
            <p className="text-xs text-green-400">✅ Rendering Tiptap editor</p>
            <Tiptap content={content} onChange={handleChange} />
          </>
        ) : (
          <p className="text-red-400">⚠️ Content is not ready or invalid</p>
        )}

        <input
          {...register('excerpt')}
          placeholder="Enter an excerpt"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />

        <input
          {...register('category')}
          placeholder="Enter a category"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />

        <h2 className="text-xl font-bold">SEO Data</h2>

        <ImageUpload returnImage={setOgImage} preloadedImage={ogImage} />

        <input
          {...register('keywords')}
          placeholder="Enter Keywords"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />

        <input
          {...register('metaDescription')}
          placeholder="Enter Meta Description"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />

        <div className="flex gap-2">
          <select
            {...register('status')}
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
  );
}
