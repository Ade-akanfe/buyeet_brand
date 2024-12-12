import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "../reusables/testimonial-card";
import ImageMe from "@/assets/image.jpeg";

const Testimonial = () => {
  return (
    <div className="w-full relative z-20 flex flex-col justify-center items-center py-10">
      <div className="w-11/12 flex flex-col gap-8 max-w-5xl">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-5">
            <span className="font-bold inline-block text-4xl lg:text-4.5xl 2xl:text-5.5xl text-neutral_variant">
              Testimonial
            </span>
            <span className="text-xs lg:text-sm 2xl:text-base text-neutral_variant inline-block">
              Don't just take our word for it - see what actual users of our
              service have to say about their experience.
            </span>
          </div>
          <span className="flex gap-5">
            <span className="rounded-full shadow-sm shadow-gray-700 p-3 bg-background">
              <FaArrowLeft />
            </span>
            <span className="rounded-full shadow-sm shadow-gray-700 p-3 bg-background">
              <FaArrowRight />
            </span>
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between"></div>
      </div>
      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row gap-6 lg:gap-4 justify-between max-w-5xl">
        <TestimonialCard
          role={"Crypto Enthusiast"}
          name={"Jane Smith"}
          icon={ImageMe}
          caption={`"I've been using Buyeet for months now and I'm amazed at how easy it is to claim airdrops. The platform's user-friendly interface and timely notifications make it a breeze. I've already claimed several valuable airdrops, and I'm excited to see what's next!"`}
        />
        <TestimonialCard
          role={"Crypto Enthusiast"}
          name={"Jane Smith"}
          icon={ImageMe}
          caption={`"I've been using Buyeet for months now and I'm amazed at how easy it is to claim airdrops. The platform's user-friendly interface and timely notifications make it a breeze. I've already claimed several valuable airdrops, and I'm excited to see what's next!"`}
        />
        <TestimonialCard
          role={"Crypto Enthusiast"}
          name={"Jane Smith"}
          icon={ImageMe}
          caption={`"I've been using Buyeet for months now and I'm amazed at how easy it is to claim airdrops. The platform's user-friendly interface and timely notifications make it a breeze. I've already claimed several valuable airdrops, and I'm excited to see what's next!"`}
        />
      </div>
    </div>
  );
};

export default Testimonial;
