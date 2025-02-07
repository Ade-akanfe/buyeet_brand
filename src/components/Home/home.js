"use client";

import JoinWaitList from "../reusables/join";
import Header from "./header";
import Airdrop1 from "@/assets/airdrops-1.png";
import Airdrop2 from "@/assets/airdrops-2.png";
import Airdrop3 from "@/assets/airdrops-3.png";
import Airdrop4 from "@/assets/airdrops-4.png";
import Airdrop5 from "@/assets/airdrops-5.png";
import Airdrop6 from "@/assets/airdrops-6.png";
import Airdrop7 from "@/assets/airdrops-7.png";
import Airdrop8 from "@/assets/airdrops-8.png";
import Airdrop9 from "@/assets/airdrops-9.png";
import Airdrop10 from "@/assets/airdrops.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import Image14 from "@/assets/image14.png";

const HomePage = () => {

  return (
    <div className="w-full h-full lg:h-screen relative overflow-hidden flex items-center flex-col ">
      <Header />
      <div className="w-full md:w-11/12 lg:w-full  h-full relative z-20 flex flex-col md:flex-row md:mt-9 lg:m-0 justify-center max-w-6xl 2xl:max-w-6xl">
        <div className=" w-full lg:w-10/12  2xl:w-full py-12 flex flex-row">
          <div className="w-full  flex justify-center flex-col items-center gap-1 lg:gap-4">
            <div className="w-10/12 md:w-80 lg:w-96 2xl:w-full font-bold leading-8 lg:leading-none text-homeColor font-roboto flex flex-col gap-2 md:gap-5">
              <span className="text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5.5xl block ">
                It&apos;s all
                <br className="hidden xl:inline-block " />
                <span className="inline mt-0 xl:inline-block xl:mt-4">
                  &nbsp;possible to
                </span>
              </span>
              {/* <br className="block lg:hidden lg.5:block" /> */}
              <span className="block font-bold text-5xl lg:text-5.5xl xl:text-6xl">
                <span className="text-buttonSt">Buy</span>
                <span>eet</span>
                <span className=" ml-1 h-3 w-3 bg-white rounded-full inline-block"></span>
              </span>
            </div>
            {/* <div className="w-10/12 lg:w-11/12 2xl:w-full text-base text-homesubfont font-opensans">
              Get in early on promising assets with Airdrop points trading and
              enjoy a secure P2P exchange for crypto and fiat.
            </div> */}
            <div className="m-5 mb-0  lg:m-5 w-10/12 md:w-80 lg:w-96 2xl:w-full">
              <JoinWaitList />
            </div>
          </div>
        </div>
        <div className="w-full h-60 smd:h-72  md:h-80 lg:h-full flex lg:w-11/12 2xl:w-full relative  z-20 2xl:max-w-7xl min-w-80 justify-center lg:justify-start items-start md:items-center">
          <div className="w-11/12 md:w-11/12 smd:w-8/12 lg:w-11/12 2xl:w-full relative h-56 md:h-60 lg:h-4/6 flex items-center">
            <Image src={Image14} alt="Ademola" className="h-full" priority />
          </div>
        </div>
      </div>

    </div>
  );
};
export default HomePage;
