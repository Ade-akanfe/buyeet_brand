"use client";

import Image from "next/image";
import ArrowImage from "@/assets/arrow_circle_right.png";
import { useRouter } from "next/navigation";

const JoinWaitList = ({ form }) => {
  const router = useRouter();

  const clicked = () => {
    if (!form || form === false) {
      router.push("#join");
    }
  };

  return (
    <>
      <button
        onClick={clicked}
        className={`flex justify-around items-center w-40 text-sm font-bold bg-primary opacity-80 p-2 rounded-2xl  cursor-pointer
        `}
      >
        <span className="block w-full text-right text-homeColor font-opensans">
          join the wait list
        </span>
        <span className="flex relative w-10 h-full">
          <Image src={ArrowImage} priority alt="icon" />
        </span>
      </button>
    </>
  );
};

export default JoinWaitList;
