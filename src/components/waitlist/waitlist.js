import Image from "next/image";
import JoinWaitList from "../reusables/join";
import Frame1 from "@/assets/frame-3.png";

const WaitList = () => {
  return (
    <div className="w-full relative z-20 flex justify-center items-center py-10 order-solid border-b-2 border_color">
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
        <div className="w-full flex items-center gap-x-5">
          <div className="w-full lg:w-3/5 2xl:w-4/5 flex justify-center p-3">
            <form className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold">Full Name</label>
                <input
                  className="flex border-1 border-neutral text-sm outline-none w-full h-14 2xl:h-12 rounded-3xl text-left px-4 bg-searchBack"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold">Email</label>
                <input
                  className="flex border-1 border-neutral text-sm outline-none w-full h-14 2xl:h-12 rounded-3xl text-left px-4 bg-searchBack"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <JoinWaitList />
              </div>
            </form>
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
