import React from "react";
import Link from "next/link";
import Button from "../Button/Button";
import { textVariants, heroVariants } from "../../utils/motionframer";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="hero-image h-[28rem] md:h-[35rem]"
    >
      <motion.div className="hero-text">
        <h1 className="text-4xl lg:text-[45px] font-semibold">
          Learn Anything You Want
          {/* Education,
          <br className="md:hidden" /> The{" "}
          <span className="text-blue-500">Best</span> Legacy! */}
        </h1>
        <p className="hidden md:block my-[2rem] text-sm text-gray-300 w-1/2 mx-auto">
          “Learning is not attained by chance; it must be sought for with ardor
          and attended to with diligence.” – Abigail Adams
        </p>
        <p className="md:hidden my-4 text-sm">
          “If you think education is expensive, try ignorance.” – Jeff Rich
        </p>
        <Link href={`/courses`}>
          <Button
            btnText="Choose your career"
            btnClass="border border-gray-100 rounded-3xl p-2 px-12 hover:bg-gray-500"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HomeHero;
