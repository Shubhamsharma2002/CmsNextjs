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
import { getAuthsession } from "@/lib/authOptions";
import Image from "next/image";
import Signout from "./signout";

export default async function NavBar () {
  const session = await getAuthsession();
 console.log("seesion",session)
    const tempUser = {
    name: 'Sam',
    username: 'sam'
  }
  return (
    <nav className="w-full flex justify-between px-8 h-12 items-center">
      <Link href="/" className="flex items-center gap-2">
        {/* <Database /> */}
        {/* <span className="font-extrabold text-black dark:text-white">
          Blogify
        </span> */}

        <Image src={"/thumbnails/BlogifyLogo.png"} width={120} height={50} alt="website logo" className="rounded"/>
      </Link>
      {session ? (
        <UserModalComponent user={session?.user}/>
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
                <Image className="rounded-full border-2 border-[greenyellow]" src={user.image} width={35} height={35} alt="profile image" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>Hi,{user.name} </DropdownMenuLabel>
            <DropdownMenuSeparator />
             <DropdownMenuItem> <Link href={`/profile/${user.username}`}>
                    Go to Profile
                </Link></DropdownMenuItem>
            <DropdownMenuItem>
              <Signout/>
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
  
}