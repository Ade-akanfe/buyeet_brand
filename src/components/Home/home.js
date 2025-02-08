"use client";

import JoinWaitList from "../reusables/join";
import Header from "./header";
import Image from "next/image";
import Image14 from "@/assets/image14.png";

const HomePage = () => {
  return (
    <div className="w-full h-full lg:h-screen relative overflow-hidden flex items-center flex-col ">
      <Header />
      <div className="w-full sm-landscape:w-10/12 md:w-11/12 lg:w-full h-full relative z-20 flex flex-col sm-landscape:flex-row md:flex-row md:mt-9 lg:m-0 justify-center max-w-7xl 2xl:max-w-6xl">
        <div className=" w-full  lg:w-10/12  2xl:w-full py-12 flex flex-row">
          <div className="w-full   flex justify-center flex-col items-center gap-1 lg:gap-4">
            <div className="w-11/12 md:w-80 lg:w-96 2xl:w-full font-bold leading-8 lg:leading-none text-homeColor font-roboto flex flex-col gap-2 md:gap-5">
              <span className="text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5.5xl block ">
                It&apos;s all
                <br className="hidden sm-landscape:inline-block xl:inline-block " />
                <span className="inline mt-0 xl:inline-block xl:mt-4">
                  <span className="inline-block sm-landscape:hidden lg:hidden">&nbsp;</span>possible
                  to
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
            <div className="m-5 mb-0  lg:m-5 w-11/12 md:w-80 lg:w-96 2xl:w-full">
              <JoinWaitList />
            </div>
          </div>
        </div>
        <div className="w-full h-60 smd:h-72  md:h-80 lg:h-full flex lg:w-11/12 2xl:w-full relative  z-20 2xl:max-w-7xl min-w-80 justify-center lg:justify-start items-start sm-landscape:items-center md:items-center">
          <div className="w-11/12 md:w-11/12 smd:w-8/12 lg:w-11/12 2xl:w-full relative h-56 sm-landscape:h-40 md:h-60 lg:h-4/6 max-h-96 flex items-center">
            <Image src={Image14} alt="Ademola" className="h-full" priority />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
