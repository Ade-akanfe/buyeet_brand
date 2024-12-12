import Image from "next/image";

const IconContainer = ({ src, altVal }) => (
  <div className="h-16 w-16">
    <Image src={src} priority alt={altVal} />
  </div>
);

export default IconContainer;
