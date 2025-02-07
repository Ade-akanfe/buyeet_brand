import Card from "../cards/card1";
import JoinWaitList from "../reusables/join";
import EthIcon from "@/assets/svgs/prop1.svg";
import BtcIcon from "@/assets/explorer-iso-color.png";

import Prop1 from "@/assets/svgs/prop1.svg";
import Prop2 from "@/assets/svgs/prop2.svg";
import Prop3 from "@/assets/svgs/prop3.svg";
import Prop4 from "@/assets/svgs/prop4.svg";
import Prop5 from "@/assets/svgs/prop5.svg";
import Prop6 from "@/assets/svgs/prop6.svg";

const WhyUs = () => {
  return (
    <div className="relative pb-20">
      <div className="w-full h-full relative z-20 pt-4 flex gap-10 flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center max-w-6xl z-20">
          <span className="text-4xl lg:text-5xl 2xl:text-5.5xl text-neutral_variant w-11/12 font-bold font-roboto ">
            Why Choose us?
          </span>
        </div>
        <div className="w-full flex justify-center items-center max-w-6xl z-20">
          <div className="w-11/12 ">
            <JoinWaitList />
          </div>
        </div>
        <div className="w-full flex justify-center max-w-6xl z-20 ">
          <div className="w-11/12 lg:w-full flex justify-center flex-col landscape:flex-row md:flex-row flex-wrap items-start gap-5 md:gap-5 md:gap-y-5 lg:gap-4 lg:gap-y-8 pb-5">
            <Card
              icon={Prop2}
              title={"Seamless P2P Transactions"}
              caption={`Experience fast, secure, and user-friendly peer-to-peer using your local currencies`}
            />

            <Card
              icon={Prop6}
              title={"Multi-Dimensional Trading"}
              caption={
                "Beyond P2P, we're laying the foundation for diverse opportuniti#BFC1FF33es like spot trading, premarket insights, and more."
              }
            />

            <Card
              icon={Prop5}
              title={"Innovative Vision"}
              caption={
                "We're building more than a platform—prepare for features that will transform how you trade, predict, and grow."
              }
              long={true}
            />
            <Card
              icon={Prop4}
              title={"Your Edge in Trading "}
              caption={
                "Designed for traders at all levels, our tools and features aim to provide an edge in navigating dynamic markets."
              }
            />
            <Card
              icon={Prop1}
              title={"Future-Focused"}
              caption={
                "With a roadmap of exciting features to come, you'll always be one step ahead.  "
              }
              wide={true}
            />
            <Card
              icon={Prop3}
              title={"Secure and Reliable"}
              caption={
                "Built with cutting-edge security and a commitment to trust, ensuring your peace of mind in every transaction."
              }
              small={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
