'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { slugify } from 'slugmaster';
import ImageUpload from './imageUpload';
import Tiptap from './textEditor/TipTapEditor';

export default function Editor({ onSave, initialData }) {
  const { register, handleSubmit, setValue } = useForm();
  const [content, setContent] = useState('');
  const [ogImage, setOgImage] = useState('');

  // Load initial data
  useEffect(() => {
    if (initialData) {
      setValue('title', initialData.title || '');
      setValue('keywords', initialData.keywords || '');
      setValue('category', initialData.catSlug || '');
      setValue('excerpt', initialData.excerpt || '');
      setValue('metaDescription', initialData.desc || '');
      setValue('status', initialData.status || 'DRAFT');

      // 🟢 IMPORTANT: Set editor content here
      setContent(initialData.content || '<p></p>');
      setOgImage(initialData.thumbnail || '');
    }
  }, [initialData, setValue]);

  // Save handler
  const handleForm = (data) => {
    const generatedSlug = slugify(data.title);
    const fullPayload = {
      ...data,
      slug: generatedSlug,
      ogImage,
      content, // updated content from TipTap
    };

    onSave(fullPayload); // callback
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

        <Tiptap content={content} onChange={setContent} />

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
