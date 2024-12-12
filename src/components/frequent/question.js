import QuestCard from "../reusables/question";

const Questions = () => {
  return (
    <div className="w-full relative z-20 flex flex-col justify-center items-center py-10">
      <div className="w-11/12 flex flex-col gap-8 max-w-5xl">
        <div className="w-full flex flex-col gap-1 lg:gap-4">
          <span className="font-bold text-4xl lg:text-4.5xl 2xl:text-5.5xl">Frequently asked questions</span>
          <span className="text-xs lg:text-sm">
            Here are some common questions and answers about our airdrop
            platform
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <QuestCard
            question={"What is an airdrop?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"How does your Buyeet work?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"Is it safe to use your platform?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"How do I know if I'm eligible for an airdrop?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
