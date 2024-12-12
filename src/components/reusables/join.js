import Image from "next/image";
import ArrowImage from "@/assets/arrow_circle_right.png";

const JoinWaitList = () => {
  return (
    <>
      <span className=" flex justify-around items-center w-40 text-sm font-bold bg-primary opacity-80 p-2 rounded-2xl  cursor-pointer">
        <span className="block w-full text-right text-homeColor font-opensans">join the wait list</span>
        <span className="flex relative w-10 h-full">
          <Image src={ArrowImage} priority alt="" />
        </span>
      </span>
    </>
  );
};

export default JoinWaitList;
