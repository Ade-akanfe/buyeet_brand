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
            question={"What is Buyeet"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"What does the platform offer now?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"What features are coming soon?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"How is this platform unique?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"Is the platform secure?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
          <QuestCard
            question={"How can I stay updated?"}
            answer={`"I was skeptical at first, but Buyeet has proven to be a legit platform for claiming airdrops. The team is responsive and helpful, and the platform's security measures are top-notch. I've already claimed a few valuable airdrops, and I'm looking forward to many more!"`}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
