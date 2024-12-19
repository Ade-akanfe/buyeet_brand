"use client";

import Image from "next/image";

import Frame1 from "@/assets/frame-3.png";
import Form from "@/utils/submit";

const WaitList = () => {
  return (
    <div
      className="w-full relative z-20 flex justify-center items-center py-10 order-solid border-b-2 border_color"
      id="join"
    >
      <div className="w-11/12 flex flex-col gap-8 max-w-5xl">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-1 lg:gap-4">
            <span className="font-bold inline-block text-4xl lg:text-4.5xl 2xl:text-5.5xl text-neutral_variant">
              Join Our Waitlist
            </span>
            <span className="text-xs lg:text-sm 2xl:text-base text-neutral_variant inline-block">
              For more Information and Date of launching
            </span>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-5  relative">
          <div className="w-full lg:w-3/5 2xl:w-4/5 flex justify-center p-3">
            <Form />
          </div>
          <div className="hidden lg:flex h-auto w-3/5">
            <Image src={Frame1} alt="form compliment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
