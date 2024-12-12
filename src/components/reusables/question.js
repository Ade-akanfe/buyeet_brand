"use client";
import { useState } from "react";

const QuestCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full flex justify-center flex-col items-center overflow-hidden py-2 
        ${open ? "h-50" : "h-auto"} border-b-2 border-gray-700 gap-4`}
    >
      <div className="h-full flex gap-3 justify-between w-full items-center ">
        <span className="text-sm font-medium lg:text-base 2xl:text-1.5xl">{question}</span>
        <span
          className="text-sm font-medium lg:text-base 2xl:text-1.5xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "-" : "+"}
        </span>
      </div>
      <div
        className={`text-xs lg:text-sm 2xl:text-base ${
          open ? "block" : "hidden transform -translate-x-full duration-700"
        }"`}
      >
        {answer}
      </div>
    </div>
  );
};

export default QuestCard;
