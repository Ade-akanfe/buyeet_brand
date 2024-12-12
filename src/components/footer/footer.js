import Image from "next/image";
import BuyeetLogo from "@/assets/buyeet_logo.png";
import Twitter from "@/assets/Frame.png";
import Discord from "@/assets/svg-1.png";
import GitHub from "@/assets/svg.png";

const Footer = () => {
  return (
    <div className="w-full relative z-40 flex justify-center items-center py-6 bg-searchBack ">
      <div className="w-full md:w-11/12  max-w-5xl flex flex-col md:flex-row justify-center items-center py-6 gap-5">
        <div className="w-11/12  md:1/2 lg:w-5/12 flex flex-col gap-3">
          <div>
            <Image src={BuyeetLogo} alt="logo" height={50} width={50} />
          </div>
          <div className="flex gap-5 flex-col ">
            <div className="flex gap-4">
              <span className="w-8 relative h-8 ">
                <Image src={Discord} alt={"social media tag"} />
              </span>
              <span className="w-8 relative h-8 ">
                <Image src={Twitter} alt={"social media tag"} />
              </span>
              <span className="w-8 relative h-8 ">
                <Image src={GitHub} alt={"social media tag"} />
              </span>
            </div>
            <span className="text-sm">© 2024 buyeet</span>
          </div>
        </div>
        <div className="w-11/12 md:1/2 lg:w-full grid grid-cols-8 gap-4">
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold">
              App
            </span>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Swap</li>
              <li>Tokens</li>
              <li>NFTs</li>
              <li>Airdrop</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold ">
              Protocol
            </span>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Community</li>
              <li>Governance</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold">
              Company
            </span>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold">
              Get Help
            </span>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Contact Us</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;