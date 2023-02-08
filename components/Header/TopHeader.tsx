import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import SearchBox from "../Filtering/SearchBox";
import { topHederVariants } from "../../utils/motionframer";
import Image from "next/image";

const TopHeader = () => {
  // const container = {
  //   hidden: { opacity: 0, y: 100 },
  //   visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  // };
  return (
    <motion.nav
      className="hidden lg:block bg-black text-white"
      variants={topHederVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <nav className="hidden lg:block bg-black text-white"> */}
      <div className="container w-[95%] px-4 py-4 flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center space-x-8 lg:basis-4/6">
          <Link href="/" className="flex items-center">
            {/* <Image
              width={500}
              height={500}
              src="/favicon.ico"
              className="h-6 mr-1 sm:h-9"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              JambitePortal
            </span>
          </Link>
          <Link href={"/institutions"}>
            <button className="hidden lg:flex px-4 py-2 rounded-3xl bg-blue-700 text-white">
              Universities
            </button>
          </Link>
          <SearchBox
            divClasses="hidden lg:flex px-8 border-none py-2 rounded-3xl items-center justify-between bg-white gap-2 flex-grow text-[14px] text-[#252525]"
            placeholderValue="search for the course or university you want to learn..."
            inputClasses="border-none w-full text-gray-900"
          >
            <AiOutlineSearch className="text-[#252525]" width={"18px"} />
          </SearchBox>
        </div>

        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="flex p-4 mt-4 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
            <li>
              <Link
                href="/events"
                className="block py-2 pl-3 pr-4 bg-transparent md:text-cyan-600 md:p-0"
                aria-current="page"
              >
                +2348022438018
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* </nav> */}
    </motion.nav>
  );
};

export default TopHeader;
