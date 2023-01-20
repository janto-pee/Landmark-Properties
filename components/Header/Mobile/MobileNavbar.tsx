import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const MobileNavbar = ({
  showNavbar,
  setShowNavbar,
}: {
  showNavbar: boolean;
  setShowNavbar: any;
}) => {
  const handleNavClick = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <motion.div className="mobile-nav p-4">
      <div className="text-md ml-auto flex justify-between">
        <div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NextEvents
          </span>
        </div>
        <button
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        >
          <FaTimes className="text-white" />
        </button>
      </div>
      <ul className="flex mt-4 mb-8 flex-col space-y-4">
        <li className="mt-4">
          <Link
            href={`/courses`}
            className="block py-2  text-white rounded"
            onClick={handleNavClick}
          >
            Universities Courses
          </Link>
        </li>{" "}
        <li>
          <Link
            href={`/courses?search=polytechnic`}
            className="block py-2  text-white rounded"
            onClick={handleNavClick}
          >
            Polytechnic Courses
          </Link>{" "}
        </li>
        <li>
          <Link
            href={`/courses?search=post-secondary`}
            className="block py-2  text-white rounded"
            onClick={handleNavClick}
          >
            Other Degrees
          </Link>{" "}
        </li>
        <li>
          <Link
            href={`/institutions`}
            className="block py-2  text-white rounded"
            onClick={handleNavClick}
          >
            Institutions
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block py-2  text-white rounded "
            aria-current="page"
            onClick={handleNavClick}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileNavbar;
