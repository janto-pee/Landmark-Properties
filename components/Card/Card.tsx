import Link from "next/link";
import React from "react";
import { homeCardInterface } from "../../types/interface";
import { GoLocation } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";
import { FaCertificate } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import Image from "next/image";

const Card = ({ item }: { item: homeCardInterface }) => {
  const { _id, course, degreeAbbr, schools, utme, faculty, years } = item;
  const utmeArray = utme.split(",");
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden  relative text-left hover:shadow-xl">
      <Link href={`/courses/${_id}`} className="cursor-pointer">
        {/* image */}
        <Image
          className="rounded-t-lg w-full lg:h-52"
          height={500}
          width={500}
          src={`/asset/images/${schools}.jpeg`}
          alt={schools}
        />

        <div className="p-4">
          <small className="text-blue-500">{schools}</small>
          <h5 className="mb-4 text-md font-[500]  tracking-tight text-gray-900 ">
            {course.toLowerCase()}
          </h5>
          <div className="mb-4 font-normal text-gray-700">
            <p className="text-sm text-gray-800">UTME</p>

            <ul className="">
              <div className="flex items-center">
                <IoIosCheckmark />
                <li className="text-sm">Use of English</li>
              </div>
              {utmeArray.map((item, index) => {
                if (index < 2) {
                  return (
                    <div className="flex items-center" key={index}>
                      <IoIosCheckmark />
                      <li className="text-sm">
                        {item.length > 18
                          ? item.substring(0, 27) + "..."
                          : item}
                      </li>
                    </div>
                  );
                }
              })}
            </ul>
          </div>
          <div className="mb-4 font-normal text-gray-700">
            <p className="text-gray-800">Faculty</p>

            <span className="text-sm">
              {faculty == "" ? "loading" : `Faculty of ${faculty}`}
            </span>
          </div>
        </div>
        {/* absolute */}
        <div>
          <div className="px-2 py-[0.2rem] text-[14px] rounded-md bg-red-200 absolute top-[0.5rem] left-[0.5rem] text-red-700 z-10 flex items-center gap-2">
            <BiTimeFive className="text-red-500" />
            <span> {years} years</span>
          </div>
          <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-800 absolute top-[0.5rem] right-[0.5rem] text-gray-200 z-10 flex gap-2 items-center">
            <FaCertificate className="" />
            <span>{degreeAbbr}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
