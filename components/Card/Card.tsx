import Link from "next/link";
import React from "react";
import { coursesInterface, homeCardInterface } from "../../types/interface";
import { GoLocation } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";
import { FaCertificate } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

const Card = ({ item }: { item: homeCardInterface }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden  relative text-left hover:shadow-xl">
      <Link href={`/courses/${item.id}`} className="cursor-pointer">
        <img
          className="rounded-t-lg w-full lg:h-52"
          src="/asset/cardimg3.jpg"
          alt=""
        />

        <div className="p-4">
          <small className="text-blue-500">AAUA</small>
          <h5 className="mb-4 text-md font-[500]  tracking-tight text-gray-900 ">
            {item.course}
          </h5>
          <div className="mb-4 font-normal text-gray-700">
            <p className="font-semibold">UTME</p>

            <ul>
              {item.utme.map((item, index) => {
                if (index < 2) {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <IoIosCheckmark />
                      <span>{item}</span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="mb-4 font-normal text-gray-700 flex items-center gap-4">
            <GoLocation color="text-yellow-400" className="text-yellow-500" />
            <span className="text-gray-800">{item.address}</span>
          </div>
        </div>

        <div>
          <div className="px-2 py-[0.2rem] text-[14px] rounded-md bg-red-200 absolute top-[0.5rem] left-[0.5rem] text-red-700 z-10 flex items-center gap-2">
            <BiTimeFive className="text-red-500" />
            <span> {item.years} years</span>
          </div>
          <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-800 absolute top-[0.5rem] right-[0.5rem] text-gray-200 z-10 flex gap-2 items-center">
            <FaCertificate className="" />
            <span>{item.degreeAbbr}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
