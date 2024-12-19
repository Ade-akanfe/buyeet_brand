import Link from "next/link";

const UserComponent = ({ users }) => {
  return (
    <div className="relative flex justify-center flex-wrap gap-10 items-start py-10 pt-20 gradient-background">
      <div className="absolute top-2 right-5 p-5 bg- rounded-3xl font-bold cursor-pointer z-20 bg-searchBack">
        <Link href={"/"} passHref target="_blank">
          Back to Website
        </Link>
      </div>
      {(!users || users.length < 1) && (
        <div className="text-base text-neutral_variant font-bold">
          No user yet
        </div>
      )}
      {users.map(({ name, email, _id, date }) => (
        <div
          key={_id}
          className="relative z-10 h-40 w-80 px-1 border-2 border-searchBack flex  justify-center items-center flex-col gap-1"
        >
          <span className="text-base  w-full text-center">{name}</span>
          <span className="text-base  w-full text-center text-wrap">
            {email}
          </span>

          <span className="text-sm  w-full text-center">
            {new Date(date).toString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserComponent;
