import Image from "next/image";

const Card = ({ icon, title, caption }) => {
  return (
    <div className="flex h-85 w-full md:w-1/2 lg:max-w-l lg:w-1/2 rounded-xl shadow-sm shadow-neutral_variant bg-searchBack justify-center items-center flex-col">
      <div className="w-4/5 h-2/5 flex items-center ">
        <Image src={icon} alt={title} height={70} width={80}/>
      </div>
      <div className="w-4/5 h-1/5">
        <span className="text-base lg:text-3xl 2xl:text-3.5xl text-homeColor font-medium font-roboto">
            {title}
        </span>
      </div>
      <div className="w-4/5 h-3/5 lg:h-2/5 font-opensans">
        <span className="text-sm lg:text-base text-homesubfont font-medium">
            {caption}
        </span>
      </div>
    </div>
  );
};

export default Card;
