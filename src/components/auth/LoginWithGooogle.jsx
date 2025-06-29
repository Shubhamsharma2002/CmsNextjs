"use client"
import { useState } from "react";
import { Icons } from "../Icons";
import { signIn } from "next-auth/react";

export  default function LoginWithGoogle() {
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
        <button onClick={onSigIn} className="w-full py-3 px-7 flex items-center justify-center gap-3 rounded-lg shadow-sm  bg-white cursor-pointer">
          <Icons.GoogleLogo className="w-4 h-8"/>
          <span className="text-base text-blue-500 font-medium">{loading ? 'Loading ...':'Sign in with Google'}</span>
        </button>
      </div>
      )
}