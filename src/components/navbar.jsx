import { Database } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NavBar() {
  const auth = true;
    const tempUser = {
    name: 'Sam',
    username: 'sam'
  }
  return (
    <nav className="w-full flex justify-between px-8 h-12 items-center">
      <Link href="/" className="flex items-center gap-2">
        <Database />
        <span className="font-extrabold text-black dark:text-white">
          Blogify
        </span>
      </Link>
      {auth ? (
        <UserModalComponent user={tempUser}/>
      ) : (
        <Link href="/sign-in" className="text-black dark:text-white">
          Sign In
        </Link>
      )}
    </nav>
  );
}

const UserModalComponent = ({ user }) => {
    return <DropdownMenu className="bg-gray-100">
            <DropdownMenuTrigger className="outline-none">
              User
                {/* <Image className="rounded-full border-2 border-[greenyellow]" src={user.image} width={30} height={30} /> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>Hi,{user.name} </DropdownMenuLabel>
            <DropdownMenuSeparator />
             <DropdownMenuItem> <Link href={`/profile/${user.username}`}>
                    Go to Profile
                </Link></DropdownMenuItem>
            <DropdownMenuItem>
              out
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
  
}