import Image from "next/image";

const HomeButton = ({ children, icon }) => {
  return (
    <div className="w-auto bg-gradient-to-r from-buttonSt from 70% to-buttonEnd to 7% text-sm lg:text-base 2xl:text-22x font-medium flex justify-center items-center gap-2 py-2 px-2 rounded-lg border-1 border-gray-400">
      <span className="w-6 h-6 lg:w-8 lg:h-8 ">
        <Image src={icon} priority alt="" />
      </span>
      <span className="text-left text-xs sm:text-sm lg:text-base 2xl:text-22x font-roboto font-medium">
        {children}
      </span>
    </div>
  );
};

export default HomeButton;
