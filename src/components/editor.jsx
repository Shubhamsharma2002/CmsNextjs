'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { slugify } from 'slugmaster';
import ImageUpload from './imageUpload';
import Tiptap from './textEditor/TipTapEditor';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Editor({ onSave, initialData }) {
  const { register, handleSubmit, setValue } = useForm();
  const [content, setContent] = useState('');
  const [ogImage, setOgImage] = useState('');
 const router = useRouter()
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
const handleForm = async (data) => {
  try {
    const generatedSlug = initialData ? initialData.slug : slugify(data.title);
    const fullPayload = {
      ...data,
      slug: generatedSlug,
      ogImage,
      content,
    };

    await onSave(fullPayload); // ✅ await this if it's async

   toast.success(initialData ? "Your blog was updated" : "Your blog page was published")
  
      


    if (data.status === "PUBLISHED") {
      router.push(`/blog/${generatedSlug}`);
    }
  } catch (error) {
    console.error("Form submission error:", error.message);
  }
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
