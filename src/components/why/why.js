import Card from "../cards/card1";
import JoinWaitList from "../reusables/join";
import EthIcon from "@/assets/eth-iso-color.png";
import BtcIcon from "@/assets/explorer-iso-color.png";
const WhyUs = () => {
  return (
    <div className="relative pb-20">
      <div className="w-full h-full relative z-20 pt-4 flex gap-10 flex-col justify-center items-center ">
        {/* <div className="absolute top-0 z-10 h-full w-full bg-gradient-radial-tl from-neutral_variant from-15% via-background to-background to-30% "></div>
        <div className="absolute top-0 z-10 h-full w-full bg-background opacity-85"></div> */}
        <div className="w-full flex justify-center items-center max-w-6xl z-20">
          <span className="text-4xl lg:text-5xl 2xl:text-5.5xl text-neutral_variant w-11/12 font-bold font-roboto">
            Why Choose us?
          </span>
        </div>
        <div className="w-full flex justify-center items-center max-w-6xl z-20">
          <div className="w-11/12 ">
            <JoinWaitList />
          </div>
        </div>
        <div className="w-full flex justify-center max-w-6xl z-20 ">
          <div className="w-11/12 flex justify-center flex-col md:flex-row items-center gap-6 pb-5">
            <Card
              icon={EthIcon}
              title={"Airdrop Points Trading"}
              caption={
                "Trade airdrop points before Token Generation Events (TGE) with instant execution of orders to gain early access to promising digital assets and enhance your investment opportunities."
              }
            />
            
            <Card
              icon={BtcIcon}
              title={"P2P Trading"}
              caption={
                "Currency exchange symbol or handshake icon for the peer-to-peer element."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
