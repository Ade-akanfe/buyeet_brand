"use client";

import HomeButton from "../reusables/home_button";
import IconContainer from "../reusables/icon_container";
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
import { useEffect, useState } from "react";

const HomePage = () => {
  const array1 = [
    { caption: "Cex.io", icon: Airdrop3 },
    { icon: Airdrop10, caption: "Notpixel" },
    { caption: "Blum", icon: Airdrop8 },
    { icon: Airdrop2, caption: "Paws" },
    { icon: Airdrop1, caption: "Tapswap" },
    { icon: Airdrop4, caption: "Major" },
    { icon: Airdrop6, caption: "Gomble" },
    { icon: Airdrop9, caption: "Musk Empire" },
    { icon: Airdrop7, caption: "Sidekick" },
    { icon: Airdrop5, caption: "W-coin" },
    { icon: Airdrop2, caption: "Paws" },
    { icon: Airdrop10, caption: "Notpixel" },
    { icon: Airdrop4, caption: "Major" },
    { icon: Airdrop3, caption: "Cex.io" },
    { icon: Airdrop8, caption: "Blum" },
    { icon: Airdrop1, caption: "Tapswap" },
    { icon: Airdrop7, caption: "Sidekick" },
    { icon: Airdrop9, caption: "Musk Empire" },
    { icon: Airdrop10, caption: "Notpixel" },
  ];
  const array2 = [
    { icon: Airdrop4, caption: "Major" },
    { icon: Airdrop8, caption: "Blum" },
    { icon: Airdrop1, caption: "Tapswap" },
    { icon: Airdrop7, caption: "Sidekick" },
    { icon: Airdrop9, caption: "Musk Empire" },
    { icon: Airdrop10, caption: "Notpixel" },
    { caption: "Blum", icon: Airdrop8 },
    { caption: "Cex.io", icon: Airdrop3 },
    { icon: Airdrop10, caption: "Notpixel" },
    { icon: Airdrop2, caption: "Paws" },
    { icon: Airdrop1, caption: "Tapswap" },
    { icon: Airdrop4, caption: "Major" },
    { icon: Airdrop6, caption: "Gomble" },
    { icon: Airdrop9, caption: "Musk Empire" },
    { icon: Airdrop7, caption: "Sidekick" },
    { icon: Airdrop5, caption: "W-coin" },
    { icon: Airdrop2, caption: "Paws" },
    { icon: Airdrop10, caption: "Notpixel" },
    { icon: Airdrop3, caption: "Cex.io" },
  ];

  let [index, setIndex] = useState(0);
  let [arrayResult, setArrayRes] = useState(array1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === arrayResult.length - 1) {
        setIndex(-1);
      }

      const current = array1[index];
      array1[index] = array2[index];
      array2[index] = current;
      setIndex((prev) => prev + 1);
      setArrayRes(array1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center flex-col ">
      <Header />
      <div className="w-full relative z-20 flex mt-9 justify-center max-w-7xl 2xl:max-w-6xl">
        <div className="w-full lg:w-10/12  2xl:w-full py-12 flex flex-row ">
          <div className="w-full  flex justify-center flex-col items-center gap-4">
            <div className="w-10/12 lg:w-11/12  2xl:w-full  font-bold text-3xl lg:text-4.5xl 2xl:text-5.5xl leading-8 lg:leading-none text-homeColor font-roboto ">
              Trading Doesn’t Have to be Hard - We
              <br className="block lg:hidden lg.5:block" /> Make it Seamless
            </div>
            <div className="w-10/12 lg:w-11/12 2xl:w-full text-base text-homesubfont font-opensans">
              Get in early on promising assets with Airdrop points trading and
              enjoy a secure P2P exchange for crypto and fiat.
            </div>
            <div className="w-10/12 lg:w-11/12 2xl:w-full">
              <JoinWaitList />
            </div>
          </div>
          <div className="hidden w-full lg:flex justify-center items-center ">
            <div className="relative w-80 2xl:w-96 h-80 2xl:h-96 border-dotted border-8 border-spacing-80 border-border rounded-full">
              <div className="absolute top-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop1} altVal={"airdrop 1"} />
              </div>
              <div className="absolute top-10 2xl:top-16 left-12  transform -translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop2} altVal={"airdrop 2"} />
              </div>
              <div className="absolute top-10 2xl:top-16 right-12 2xl:right-12 transform translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop3} altVal={"airdrop 3"} />
              </div>
              <div className="absolute top-36 2xl:top-48 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop4} altVal={"airdrop 4"} />
              </div>
              <div className="absolute top-64 2xl:top-80 left-10 2xl:left-14 transform -translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop5} altVal={"airdrop 5"} />
              </div>
              <div className="absolute top-36 2xl:top-48 right-0 transform translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop6} altVal={"airdrop 6"} />
              </div>
              <div className="absolute top-64 2xl:top-80 right-10 2xl:right-14 transform translate-x-1/2 -translate-y-1/2">
                <IconContainer src={Airdrop7} altVal={"airdrop 7"} />
              </div>
              <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                <IconContainer src={Airdrop8} altVal={"airdrop 9"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:w-10/12 2xl:w-full relative z-20  2xl:max-w-7xl min-w-80 justify-center items-center px-4 py-8 gap-4 flex-wrap">
        <div className="w-full  lg:w-full 2xl:w-full  flex justify-center items-center px-4 lg:px-0 py-8 gap-4 flex-wrap">
          {arrayResult.map((el, index) => (
            <HomeButton icon={el.icon} key={index}>
              {el.caption}
            </HomeButton>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
