import Image from "next/image";

const Card = ({ icon, title, caption, long, small, wide }) => {
  return (
    <div
      className={`flex ${long ? "h-auto md:h-85" : "h-auto"} w-full ${
        wide ? "w-full w_70" : "w-full md:w-48"
      }
      ${small ? "w-full  w_30" : " w-full md:w-48"}
      lg:h-auto
      sm-landscape:w-32  lg:max-w-6xl lg:w-88 rounded-xl shadow-sm shadow-neutral_variant bg-searchBack justify-center items-center flex-col pb-5 gap-5`}
    >
      <div className="w-5/6 h-44 flex items-center">
        <Image src={icon} alt={title} height={100} width={120} />
      </div>
      <div className="w-4/5">
        <span className="h-20 text-base lg:text-3xl 2xl:text-3.5xl text-homeColor font-medium font-roboto">
          {title}
        </span>
      </div>
      <div className="w-5/6 h-28 lg:h-2/5 font-opensans my">
        <span className="text-sm  text-homesubfont font-medium">{caption}</span>
      </div>
    </div>
  );
};

export default Card;
