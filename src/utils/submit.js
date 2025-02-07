"use client";

import ArrowImage from "@/assets/arrow_circle_right.png";

import { SubmitForm } from "@/library/form";
import Image from "next/image";
import { useActionState } from "react";

const Form = () => {
  const [data, action, isPending] = useActionState(SubmitForm, {});

  return (
    <form className="flex flex-col w-full gap-4" action={action}>
      {data.error && (
        <span className="my-3 font-opensans font-medium forced top-0 absolute w-auto text-xs">
          {data.error}
        </span>
      )}
      {data.success && (
        <span className="my-3 font-opensans font-medium top-0 absolute w-auto text-xs">
          {data.message}
        </span>
      )}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold">Full Name</label>
        <input
          className="flex border-1 border-neutral text-sm outline-none w-full h-14 2xl:h-12 rounded-full focus:border-none  focus:outline-none text-left p_10 bg-searchBack"
          placeholder="Enter Full Name"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold">Email</label>
        <input
          required
          type="email"
          name="email"
          className="flex border-1 border-neutral text-sm outline-none w-full h-14 2xl:h-12 rounded-full text-start p_10 bg-searchBack focus:border-none focus:outline-none"
          placeholder="Enter Email"
        />
      </div>
      <div>
        <button
          disabled={isPending}
          className={`disabled:cursor-not-allowed flex justify-around items-center w-40 text-sm font-bold bg-primary opacity-80 p-2 rounded-2xl  cursor-pointer
        `}
        >
          <span className="block w-full text-right text-homeColor font-opensans">
            join the wait list
          </span>
          <span className="flex relative w-10 h-full">
            <Image src={ArrowImage} priority alt="" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
