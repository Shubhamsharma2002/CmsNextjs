"use client";
import { toast, Toaster } from "sonner";
import { Icons } from "../Icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginWithLinkdin() {
  return (
    <div className="w-full mt-3">
      <button className="w-full py-3 px-7 flex items-center justify-center gap-3 rounded-lg shadow-sm  bg-emerald-500 cursor-pointer">
        <Icons.Linkdin className="w-4 h-8" />
        <span className="text-base text-white font-medium">
          Sign in with Linkdin
        </span>
      </button>
    </div>
  );
}
