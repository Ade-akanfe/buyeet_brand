import UserComponent from "@/components/user/user";
import { getUsers } from "@/library/form";

const UserPage = async () => {
  const users = await getUsers();
  return (
    <div className= "h-screen w-auto relative gradient-background">
      <UserComponent users={users.users} />
    </div>
  );
};

export default UserPage;
