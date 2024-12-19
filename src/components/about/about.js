import { CiSearch } from "react-icons/ci";
import Indicator from "@/assets/indicator.png";
import Indicator1 from "@/assets/indicator-1.png";
import Image from "next/image";
import ListButton, { ListCard, ListImageTemp } from "../reusables/list_button";
import Airdrop5 from "@/assets/airdrops-5.png";

const About = () => {
  const list = new Array(5);

  return (
    <div className="w-full relative z-40 flex justify-center items-center">
      <div className="w-11/12 max-w-5xl flex z-30 flex-col gap-5">
        <span className="inline-block text-3xl lg:text-4.5xl 2xl:text-5.5xl font-bold font-roboto" >
          One Platform, Multi Assets
        </span>
        <span className="inline-block text-sm 2xl:text-base text-neutral_variant font-opensans">
          As a trusted crypto platform we have a chain of crypto assets with
          Multi Airdrops.
        </span>
        <div className="py-5 flex flex-col gap-5">
          <div className="flex relative rounded-xl h-full w-full bg-searchBack overflow-hidden justify-around border-1 border-gray-400">
            <input
              className="flex h-14 pl-5 input2 w-full bg-searchBack justify-start items-start bg-black"
              placeholder="Search"
            />
            <span className="flex w-20 center bg-searchBack justify-center items-center h-14 ">
              <span className="h-full w-full text-center flex justify-center  items-center ">
                <CiSearch className="flex w-6  h-full justify-center items-center cursor-pointer font-bold" />
              </span>
            </span>
          </div>
          <div className="flex relative rounded-xl h-full w-full font-roboto bg-searchBack overflow-hidden justify-center border-1 border-gray-400">
            <div className="w-10/12 grid grid-cols-4 gap-6 py-8 rounded-lg shadow-sm">
              <div className="col-span-2 flex gap-9 flex-col">
                <span className="inline-blockfont-medium lg:text-2.5xl 2xl:text-3.5xl font-roboto">
                  Assets
                </span>
                <div className="flex gap-9 flex-col">
                  <ListButton icon={Airdrop5} name={"Metamask"} />
                  <ListButton icon={Airdrop5} name={"Metamask"} />
                  <ListButton icon={Airdrop5} name={"Metamask"} />
                  <ListButton icon={Airdrop5} name={"Metamask"} />
                  <ListButton icon={Airdrop5} name={"Metamask"} />
                  <ListButton icon={Airdrop5} name={"Metamask"} />
                </div>
              </div>
              <div className="flex gap-9 flex-col">
                <span className="inline-flex justify-center items-center h-full font-roboto font-medium lg:text-base 2xl:text-3.5xl">
                  Sell
                </span>
                <div className="flex gap-9 flex-col items-center">
                  <ListImageTemp icon={Indicator1} />
                  <ListImageTemp icon={Indicator1} />
                  <ListImageTemp icon={Indicator1} />
                  <ListImageTemp icon={Indicator1} />
                  <ListImageTemp icon={Indicator1} />
                  <ListImageTemp icon={Indicator1} />
                </div>
              </div>
              <div className="flex gap-9 flex-col">
                <span className="inline-flex justify-center font-roboto items-center h-full font-medium lg:text-base 2xl:text-3.5xl">
                  Buy
                </span>
                <div className="flex gap-9 flex-col items-center">
                  <ListImageTemp icon={Indicator} />
                  <ListImageTemp icon={Indicator} />
                  <ListImageTemp icon={Indicator} />
                  <ListImageTemp icon={Indicator} />
                  <ListImageTemp icon={Indicator} />
                  <ListImageTemp icon={Indicator} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-5  flex-col gap-3 md:gap-y-6 md:gap-0 md:flex-row md:flex-wrap md:justify-start">
          <ListCard
            caption={"Enjoy competitive fees on all trades."}
            title={"Low fees"}
          />
          <div className="hidden md:block w-0 md:w-8"></div>
          <ListCard
            caption={
              "Trade with confidence, backed by enterprise-grade security."
            }
            title={"Top- notch security "}
          />

          <ListCard
            caption={
              "Get help from our support team or connect with peers for assistance."
            }
            title={"24/7 Support "}
          />
          <div className="hidden md:block w-0 md:w-8"></div>
          <ListCard
            caption={"Swift & effortless instant market access"}
            title={"Real time trading"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
