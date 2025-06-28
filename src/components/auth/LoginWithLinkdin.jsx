
"use client";
import { toast, Toaster } from "sonner";
import { Icons } from "../Icons";
import { signIn } from "next-auth/react";
import { useState } from "react";


export  default function  LoginWithLinkdin () {
  const[loading,setLoading] = useState(false)
  const onSigIn = async()=>{
    try {
      setLoading(true)
       await signIn("google")
    } catch (error) {
      console.error(error.message)
      toast.error("failed to signIn :: - try again")
    } finally{
      setLoading(false);
    }

  }
  return(
         <div className="w-full mt-3">
        <button onClick={onSigIn} className="w-full py-3 px-7 flex items-center justify-center gap-3 rounded-lg shadow-sm  bg-emerald-500 cursor-pointer">
          <Icons.Linkdin className="w-4 h-8"/>
          <span className="text-base text-white font-medium">{loading ? 'Loading ...':'Sign in with Linkdin'}</span>
        </button>
      </div>
      )
}