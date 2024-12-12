import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewsCard from "../reusables/news_card";
import HandImage from "@/assets/hand.jpeg";

const News = () => {
  return (
    <div className="w-full relative z-20 flex justify-center items-center py-10">
      <div className="w-11/12 flex flex-col gap-8 max-w-5xl">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-5">
            <span className="font-bold inline-block text-4xl lg:text-4.5xl 2xl:text-5.5xl text-neutral_variant">
              Latest News
            </span>
            <span className="text-xs lg:text-sm 2xl:text-base text-neutral_variant inline-block">
              Find the latest news about blockchains, crypto, and anything that
              help you to learn about the digital world
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
        <div className="w-full flex flex-col md:flex-row lg:flex-row gap-6 lg:gap-0 justify-between">
          <NewsCard
            caption={`Web3 Wallet Community AMA: 
                    Join Us for an Exclusive 
                    Q&A Session`}
            src={HandImage}
            val1={"Article"}
            val2={"11, Nov 2024"}
          />
          <NewsCard
            caption={`Web3 Wallet Community AMA: 
                    Join Us for an Exclusive 
                    Q&A Session`}
            src={HandImage}
            val1={"Article"}
            val2={"11, Nov 2024"}
          />
          <NewsCard
            caption={`Web3 Wallet Community AMA: 
                    Join Us for an Exclusive 
                    Q&A Session`}
            src={HandImage}
            val1={"Article"}
            val2={"11, Nov 2024"}
          />
          
        </div>
      </div>
    </div>
  );
};

export default News;
