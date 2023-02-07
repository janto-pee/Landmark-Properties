import React, { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./Mobile/MobileNavbar";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motionframer";

const Navbar = ({
  navClass,
  showNavbar,
  setShowNavbar,
}: {
  navClass?: string;
  showNavbar: boolean;
  setShowNavbar: any;
}) => {
  return (
    <motion.nav
      className="bg-black lg:bg-slate-900 text-white border-b border-gray-600"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container w-[95%] px-4 py-2 flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center gap-12 lg:basis-4/6">
          <Link href="/" className={`flex items-center ${navClass}`}>
            {/* <img
              src="/favicon.ico"
              className="h-6 mr-1 sm:h-9"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-[1.2rem] whitespace-nowrap text-gray-200">
              JambitePortal
            </span>
          </Link>
          <Link href={`/courses`} className="hidden lg:flex items-center">
            <span className="self-center text-[16px] whitespace-nowrap text-gray-400">
              Universities Courses
            </span>
          </Link>
          <Link
            href={`/courses?institutionType=polytechnic`}
            className="hidden lg:flex items-center"
          >
            <span className="self-center text-[16px] whitespace-nowrap text-gray-400">
              Polytechnic Courses
            </span>
          </Link>
          <Link
            href={`/courses?institutionType=college`}
            className="hidden lg:flex items-center"
          >
            <span className="self-center text-[16px] whitespace-nowrap text-gray-400">
              College Degrees
            </span>
          </Link>
          <Link
            href={`/courses?institutionType=Innovation`}
            className="hidden lg:flex items-center"
          >
            <span className="self-center text-[16px] whitespace-nowrap text-gray-400">
              Innovation Programmes
            </span>
          </Link>
          {/* <Link href={`/institutions`} className="hidden lg:flex items-center">
            <span className="self-center text-[16px] whitespace-nowrap text-gray-400">
              Institutions
            </span>
          </Link> */}
        </div>

        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="flex p-4 mt-4 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 bg-transparent md:text-gray-300 md:p-0"
                aria-current="page"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
