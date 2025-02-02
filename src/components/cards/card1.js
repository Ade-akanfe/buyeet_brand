import Image from "next/image";

const Card = ({ icon, title, caption }) => {
  return (
    <div className="flex h-auto w-full min-w-52 md:w-1/5 sm-landscape:w-32  lg:max-w-6xl lg:w-1/4 rounded-xl shadow-sm shadow-neutral_variant bg-searchBack justify-center items-center flex-col pb-5">
      <div className="w-4/5 h-32 flex items-center ">
        <Image src={icon} alt={title} height={70} width={80}/>
      </div>
      <div className="w-4/5">
        <span className="h-20 text-base lg:text-3xl 2xl:text-3.5xl text-homeColor font-medium font-roboto">
            {title}
        </span>
      </div>
      <div className="w-4/5 h-28 lg:h-2/5 font-opensans my">
        <span className="text-sm  text-homesubfont font-medium">
            {caption}
        </span>
      </div>
    </div>
  );
};

export default Card;
