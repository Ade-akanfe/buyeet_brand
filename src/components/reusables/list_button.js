import Image from "next/image";

const ListButton = ({ name, icon }) => (
  <div className="flex  items-center h-10">
    <span className="relative w-9">
      <Image src={icon} alt={name} height={30} width={30} />
    </span>
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export const ListImageTemp = ({ icon }) => {
  return (
    <span className="relative w-8 h-10 flex items-center">
      <Image src={icon} alt="" />
    </span>
  );
};

export const ListCard = ({ title, caption, className }) => {
  return (
    <div
      className={
        `relative flex rounded-xl h-40 w-full md:w-custom-half bg-searchBack overflow-hidden py-6 border-1 border-gray-400 justify-center items-center flex-col gap-4 ` +
        className
      }
    >
      <span className="block w-4/5 text-2xl lg:text-3xl font-medium h-1/3">{title}</span>
      <span className="block w-4/5 h-1/2 text-xs lg:text-sm" >{caption}</span>
    </div>
  );
};

export default ListButton;
