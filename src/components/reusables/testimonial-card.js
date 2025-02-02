import Star from "@/assets/svgs/star";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const TestimonialCard = ({ icon, caption, name, role }) => {
  return (
    <div className="rounded-xl border-1 h-85 lg:h-100 border-neutral w-full lg:w-full flex justify-center bg-searchBack sm-landscape:w-72 ">
      <div className="flex flex-col  h-full justify-center gap-8 items-center">
        <span className="block text-xs lg:text-base text-center w-10/12 lg:w-11/12 bg">{caption}</span>
        <span className="flex w-11/12 justify-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
        <div className="w-11/12 justify-center flex flex-col items-center gap-1">
          <div className="rounded-full overflow-hidden w-10 lg:w-14">
            <Image src={icon} alt="name" />
          </div>
          <span className="text-sm font-bold lg:text-1.5xl">{name}</span>
          <span className="text-xs lg:text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
