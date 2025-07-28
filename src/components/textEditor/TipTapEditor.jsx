'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Menubar from './menubar';
import { useEffect } from 'react';

export default function Tiptap({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: 'list-disc ml-4' } },
        orderedList: { HTMLAttributes: { class: 'list-decimal ml-4' } },
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight,
    ],
    content: content || '<p></p>', // fallback content
    editorProps: {
      attributes: {
        class: 'min-h-[156px] border rounded-md py-2 px-3 bg-white text-black',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync DB content into editor after it mounts
  useEffect(() => {
    if (editor && content && editor.getHTML() !== content) {
      console.log('✅ Setting content in editor:', content);
      editor.commands.setContent(content, false); // false = don't trigger onUpdate
    }
  }, [editor, content]);

  return (
    <div>
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
