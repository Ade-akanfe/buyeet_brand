import Image from "next/image";
import BuyeetLogo from "@/assets/buyeet_logo.png";
import Twitter from "@/assets/Frame.png";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

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
                <Link href={"https://t.me/buyeetcom"} target="_blank">
                  <FaTelegramPlane size={30} className="text-neutral_variant" />
                </Link>
              </span>
              <span className="w-8 relative h-8 ">
                <Link
                  href={"https://twitter.com/buyeetcom"}
                  passHref
                  target="_blank"
                >
                  <Image src={Twitter} alt={"social media tag"} />
                </Link>
              </span>
              <span className="w-8 relative h-8 ">
                <Link href={"https://YouTube.com/@buyeetcom"} target="_blank">
                  <FaYoutube size={30} className="text-neutral_variant" />
                </Link>
              </span>
              <span className="w-8 relative h-8  " target="_blank">
                <Link href={"https://TikTok.com/@buyeetcom"}>
                  <FaTiktok size={30} className="text-neutral_variant" />
                </Link>
              </span>
              <span className="w-8 relative h-8 " target="_blank">
                <Link href={"https://facebook.com/buyeetcom"}>
                  <FaFacebook size={30} className="text-neutral_variant" />
                </Link>
              </span>
              <span className="w-8 relative h-8 " target="_blank">
                <Link href={"https://instagram.com/buyeetcom"}>
                  <FaInstagram size={30} className="text-neutral_variant" />
                </Link>
              </span>
            </div>
            <span className="text-sm">© 2024 buyeet</span>
          </div>
        </div>
        <div className="w-11/12 md:1/2 lg:w-full grid grid-cols-8 gap-4">
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold text-neutral_variant">
              App
            </span>
            <ul className="flex flex-col gap-4 text-sm text-neutral_variant">
              <li>Swap</li>
              <li>Tokens</li>
              <li>NFTs</li>
              <li>Airdrop</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold text-neutral_variant">
              Protocol
            </span>
            <ul className="flex flex-col gap-4 text-sm text-neutral_variant">
              <li>Community</li>
              <li>Governance</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold text-neutral_variant">
              Company
            </span>
            <ul className="flex flex-col gap-4 text-sm text-neutral_variant">
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-3 flex-col">
            <span className="text-base md:text-xl lg:text-1.5xl font-bold text-neutral_variant">
              Get Help
            </span>
            <ul className="flex flex-col gap-4 text-sm text-neutral_variant">
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
