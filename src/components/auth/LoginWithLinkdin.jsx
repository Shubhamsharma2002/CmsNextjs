import { Icons } from "../Icons";

export  default function LoginWithGoogle() {
  return(
         <div className="w-full mt-3">
        <button className="w-full py-3 px-7 flex items-center justify-center gap-3 rounded-lg shadow-sm  bg-white cursor-pointer">
          <Icons.GoogleLogo className="w-4 h-8"/>
          <span className="text-base text-blue-500 font-medium">Sign in with Google</span>
        </button>
      </div>
      )
}