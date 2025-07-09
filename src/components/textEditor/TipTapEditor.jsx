'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './menubar'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { useEffect } from 'react'

export default function Tiptap({ content, onChange }) {
  console.log("💡 Tiptap content prop:", content);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-4',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ],
    content: '<p></p>', // fallback content
    editorProps: {
      attributes: {
        class: 'min-h-[156px] border rounded-md py-2 px-3',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  // 🔥 This is the key to update content AFTER editor is mounted
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content)
    }
  }, [editor, content])

  return (
    <div>
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
