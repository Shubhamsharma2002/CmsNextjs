'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './menubar'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'

export default function Tiptap ({content,onChange}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
      bulletList:{
        HTMLAttributes: {
    class: 'list-disc ml-4',
  },
      },
      orderedList:{
        HTMLAttributes:{
          class:'list-decimal ml-4'
        }
      }
}),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight
    ],
    
    content: content,
    editorProps:{
      attributes:{
        class:"min-h-[156px] border rounded-md py-2 px-3 "
      }
    },
    onUpdate:({editor})=>{
    //  console.log(editor.getHTML());
     onChange(editor.getHTML());
     
    }
  })

  return (
    <div>
      <Menubar editor={editor}/>
      <EditorContent editor={editor} />
    </div>
  )
}


