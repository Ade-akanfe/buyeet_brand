import Image from "next/image";

const IconContainer = ({ src, altVal }) => (
  <span className="h-16 w-16">
    <Image src={src} priority alt={altVal} />
  </span>
);

export default IconContainer;
