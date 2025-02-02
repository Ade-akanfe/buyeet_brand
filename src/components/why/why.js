import Card from "../cards/card1";
import JoinWaitList from "../reusables/join";
import EthIcon from "@/assets/eth-iso-color.png";
import BtcIcon from "@/assets/explorer-iso-color.png";
const WhyUs = () => {
  return (
    <div className="relative pb-20">
      <div className="w-full h-full relative z-20 pt-4 flex gap-10 flex-col justify-center items-center ">
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
          <div className="w-11/12 flex  justify-center flex-col landscape:flex-row md:flex-row flex-wrap items-start gap-5 lg:gap-9 pb-5">
            <Card
              icon={EthIcon}
              title={"Seamless P2P Transactions"}
              caption={`Experience fast, secure, and user-friendly peer-to-peer using your local currencies`}
            />

            <Card
              icon={BtcIcon}
              title={"Multi-Dimensional Trading"}
              caption={
                "Beyond P2P, we're laying the foundation for diverse opportunities like spot trading, premarket insights, and more."
              }
            />

            <Card
              icon={BtcIcon}
              title={"Innovative Vision"}
              caption={
                "We're building more than a platform—prepare for features that will transform how you trade, predict, and grow."
              }
            />
            <Card
              icon={BtcIcon}
              title={"Your Edge in Trading "}
              caption={
                "Designed for traders at all levels, our tools and features aim to provide an edge in navigating dynamic markets."
              }
            />
            <Card
              icon={BtcIcon}
              title={"Future-Focused"}
              caption={
                "With a roadmap of exciting features to come, you'll always be one step ahead.  "
              }
            />
            <Card
              icon={BtcIcon}
              title={"Secure and Reliable"}
              caption={
                "Built with cutting-edge security and a commitment to trust, ensuring your peace of mind in every transaction."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
