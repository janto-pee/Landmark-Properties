import Link from "next/link";
import React from "react";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import {
  courseCardInterface,
  courseDetailInterface,
} from "../../types/interface";
import { FaCertificate } from "react-icons/fa";
import Image from "next/image";

const AllCoursesCards = ({ item }: { item: courseCardInterface }) => {
  const { _id, course, degreeAbbr, schools, utme, faculty, years } = item;
  return (
    <Link
      href={`/courses/${_id}`}
      className="relative flex flex-col items-center bg-white shadow border rounded-lg mt-8 lg:mt-2 border-gray-200 md:border-0 border-b md:flex-row  hover:bg-gray-100"
    >
      <Image
        width={500}
        height={500}
        className="object-cover w-full rounded-t-lg h-52 md:h-full md:w-60  md:rounded-lg"
        src={`/asset/images/${schools}.jpeg`}
        alt=""
      />
      <div className="flex flex-col p-4 lg:pl-8 justify-between leading-normal md:w-full">
        <h5 className="mb-2 text-md font-thin tracking-tight text-blue-800">
          {schools}
        </h5>
        <h5 className="mb-2 text-md md:text-lg font-semibold tracking-tight text-gray-900">
          {course}
        </h5>
        <p className="mb-3 text-sm md:text-md text-gray-500">{utme}</p>
        <div className="flex flex-col md:flex-row text-left md:justify-between md:items-center gap-4 mt-4">
          <div className="hidden md:flex items-center gap-4">
            <GrCertificate className="text-blue-700" />
            <span className="font-semibold text-blue-900">{degreeAbbr}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BiTimeFive className="text-blue-700" />
              <span className="font-semibold text-blue-900">{faculty}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <AiOutlineCalendar className="text-blue-700" />
              <span className="font-semibold text-blue-900">{years} years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 py-[0.2rem] text-[14px] rounded-md bg-red-200 absolute top-[0.5rem] left-[0.5rem] text-red-700 z-10 flex items-center gap-2">
          <BiTimeFive className="text-red-500" />
          <span> {"4 Years"}</span>
        </div>
        <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-800 absolute top-[0.5rem] right-[0.5rem] text-gray-200 z-10 flex gap-2 items-center">
          <FaCertificate className="" />
          <span> {"B.Sc"}</span>
        </div>
      </div>
    </Link>
  );
};

export default AllCoursesCards;
