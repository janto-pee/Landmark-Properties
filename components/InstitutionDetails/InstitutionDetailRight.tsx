import React from "react";
import Cards from "../Cards/Cards";
import { courseDetailInterface } from "../../types/interface";
import { IoIosCheckmark } from "react-icons/io";

const InstitutionDetailRight = ({
  course,
}: {
  course: courseDetailInterface;
}) => {
  return (
    <div className="w-full lg:basis-4/6 p-2">
      <div className="my-8 ">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600">Overview</h1>
        <p className="text-gray-400 md:text-gray-500">{course.courseSummary}</p>
      </div>
      <div className="my-8 ">
        <img src="/asset/cardgrad.jpg" />
      </div>
      <div className="my-8 py-4 border-t border-b ">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600">Faculty</h1>
        <ul>
          {course.ssce.map((item, index) => (
            <li key={index} className="my-2 text-gray-400 md:text-gray-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8 py-4">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600 ">Department</h1>
        <ul>
          <li className="flex items-center gap-4">
            <IoIosCheckmark />
            <span className="text-gray-400 md:text-gray-500">
              Use of English
            </span>
          </li>
          {course.utme.map((item, index) => (
            <li
              key={index}
              className="my-2 flex items-center gap-4 text-gray-400 md:text-gray-500"
            >
              <IoIosCheckmark />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4 py-8 md:py-4">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600 ">
          School Fees & Funding
        </h1>
        <ul className="text-gray-400 md:text-gray-500">
          {course.feesAndFunding.map((item, index) => (
            <li className="list-none" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstitutionDetailRight;
