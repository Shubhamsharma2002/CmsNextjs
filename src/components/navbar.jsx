import { Database } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const auth = true;
  return (
    <nav className="w-full flex justify-between px-8 h-12 items-center">
      <Link href="/" className="flex items-center gap-2">
        <Database />
        <span className="font-extrabold text-black dark:text-white">
          Blogify
        </span>
      </Link>
      {auth ? (
        <p>User</p>
      ) : (
        <Link href="/sign-in" className="text-black dark:text-white">
          Sign In
        </Link>
      )}
    </nav>
  );
}
