import AdminAllPosts from "@/components/admin/adminAllposts";
import UserAllPosts from "@/components/admin/userAllpost";
import { authOptions } from "@/lib/authOptions";
import isAdmin from "@/utils/isAdmin";
import { getServerSession } from "next-auth";

export default async function AllPosts({ searchParams }) {
  const page = searchParams.page || 1;
  const category = searchParams.cat || null;
  const session = await getServerSession(authOptions);

  const adminCheck = await isAdmin(session);
  
  console.log(adminCheck, " admin Check");
  if (!adminCheck) {
    return <UserAllPosts page={page} category={category} user={session.user} />;
  }
  return (
    <div>
      <AdminAllPosts page={page} category={category} />
    </div>
  );
}
