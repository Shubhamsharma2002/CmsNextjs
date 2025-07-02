'use client';

import { Form, useForm } from 'react-hook-form';
import { useState } from 'react';
import Tiptap from './textEditor/TipTapEditor';

export default function Editor() {
  const { register, handleSubmit } = useForm();
 return(
    <Tiptap/>
 )

}
