import LoginWithEmail from "@/components/auth/LoginwithEmail";
import LoginWithGoogle from "@/components/auth/LoginWithGooogle";
import LoginWithLinkdin from "@/components/auth/LoginWithLinkdin";

import { Icons } from "@/components/Icons";
import Image from "next/image";

export default function SignIn(){
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Left: Login Form */}
            <div className="flex items-center justify-center">
       <Image src="/thumbnails/LoginPage.png" height={400} width={400} alt="login image"/>
      </div>
      {/* Right: Image or anything else */}
      <div className="p-4 max-w-xs mx-auto flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>
        <LoginWithEmail/>
        <LoginWithGoogle/>
        <LoginWithLinkdin/>
      </div>
    </div>
  );
}