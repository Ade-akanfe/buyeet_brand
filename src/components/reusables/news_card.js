import Image from "next/image";

const NewsCard = ({ src, caption, val1, val2 }) => {
  return (
    <div className="rounded-xl border-1 h-88 lg:h-92 border-neutral_variant w-full lg:w-78 flex justify-center p-5 sm-landscape:w-60 sm-landscape:h-96">
      <div className="w-full flex gap-y-5  flex-col">
        <Image className="w-full rounded-xl h-4/6 sm-landscape:h-3/6 " src={src} alt="caption" />
        <div className="flex w-full flex-col h-2/6 gap-6 lg:gap-0 justify-between">
          <span className="w-6/12 text-neutral_variant md:w-8/12 lg:w-9/12 text-xs lg:text-sm 2xl:text-base">
            {caption}
          </span>
          <span className="flex justify-between text-xs text-neutral_variant lg:text-sm 2xl:text-base">
            <span>{val1}</span>
            <span>{val2}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
