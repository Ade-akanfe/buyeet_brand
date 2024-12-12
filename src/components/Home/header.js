"use client";

import Link from "next/link";
import JoinWaitList from "../reusables/join";
import BuyeetLogo from "@/assets/buyeet_logo.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-searchBack relative z-20 flex w-full h-auto py-2 lg:py-5 justify-center border-solid border-b-2 border_color">
        <div className="w-11/12 md:w-10/12 lg:w-11/12 max-w-7xl flex justify-between ">
          <div className="relative lg:h-12 flex w-full lg:w-1/6 justify-start lg:justify-start  2xl:justify-center items-center">
            <div className="relative w-10 h-10 lg:w-16 lg:h-16">
              <Image
                alt="company's logo"
                src={BuyeetLogo}
                priority
                // height={50}
                // width={50}
                layout="fill"
              />
            </div>
          </div>
          <div className="xl:hidden w-full text-right  flex justify-end items-center">
            <FaBars
              className=" text-2xl xl:text-3xl cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className="hidden xl:flex flex-row w-8/12 max-w-5xl justify-start items-center gap-10 ">
            <span className="flex relative rounded-xl h-full w-96 bg-searchBack overflow-hidden justify-around">
              <CiSearch className="flex w-10 h-full justify-center items-center pl-3 bg-searchBack cursor-pointer" />
              <input
                className="flex input w-full bg-searchBack"
                placeholder="Search"
              />
              <span className="flex w-10 pr-3 justify-center items-center h-full bg-searchBack">
                <span className="h-1/2 w-full border-2 border-searchBack rounded-md text-center flex justify-center bg-searchBack items-center text-xs font-extrabold">
                  /
                </span>
              </span>
            </span>
            <span className="inline-block">
              <Link href={"#"} className="text-sm font-medium">
                Learn
              </Link>
            </span>
            <span className=" inline-block">
              {" "}
              <Link href={"#"} className="text-sm font-medium">
                About Us
              </Link>
            </span>
            <JoinWaitList />
          </div>
        </div>
      </div>
      <div
        className={`absolute h-screen w-full z-30 bg-gray-700 top-0 flex justify-center 
          ${
            open
              ? "transform translate-y-0 duration-300"
              : "transform -translate-y-full duration-300"
          }

          
          `}
      >
        <div className="h-full w-11/12 flex gap-14 flex-col">
          <span className=" h-auto inline-flex justify-end pt-8">
            <MdOutlineCancel
              className="text-2xl cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          </span>
          <div className=" flex justify-start items-center gap-10 flex-col">
            <span className="flex relative rounded-xl h-10 w-full bg-searchBack overflow-hidden justify-around">
              <CiSearch className="flex w-10 h-full justify-center items-center pl-3 bg-searchBack cursor-pointer" />
              <input
                className="flex input w-full bg-searchBack"
                placeholder="Search"
              />
              <span className="flex w-10 pr-3 justify-center items-center h-full bg-searchBack">
                <span className="h-1/2 w-full border-2 border-searchBack rounded-md text-center flex justify-center bg-searchBack items-center text-xs font-extrabold">
                  /
                </span>
              </span>
            </span>
          </div>
          <div className="flex flex-col h-3/6 justify-center items-center gap-5">
            <span className="inline-block">
              <Link href={"#"} className="text-sm font-medium">
                Learn
              </Link>
            </span>
            <span className=" inline-block">
              {" "}
              <Link href={"#"} className="text-sm font-medium">
                About Us
              </Link>
            </span>
          </div>
          <div className="flex w-full justify-center items-center pb-4">
            <JoinWaitList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
