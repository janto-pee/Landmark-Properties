import React from "react";
import Cards from "../Cards/Cards";
import { courseDetailInterface } from "../../types/interface";
import { IoIosCheckmark } from "react-icons/io";

const CourseDetailRight = ({ course }: { course: courseDetailInterface }) => {
  return (
    <div className="w-full md:basis-4/6 p-4">
      <div className="my-8 ">
        <h1 className="mb-4 text-2xl">Course Summary</h1>
        <p className="text-gray-700">{course.courseSummary}</p>
      </div>
      <div className="my-8 py-4 border-t border-b ">
        <h1 className="mb-4 text-xl ">SSCE Requirements</h1>
        <ul>
          {course.ssce.map((item, index) => (
            <li key={index} className="my-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8 py-4">
        <h1 className="mb-4 text-xl ">UTME Requirment</h1>
        <ul>
          <li className="flex items-center gap-4">
            <IoIosCheckmark />
            <span className="text-gray-700">Use of English</span>
          </li>
          {course.utme.map((item, index) => (
            <li
              key={index}
              className="my-2 flex items-center gap-4 text-gray-700"
            >
              <IoIosCheckmark />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4 border-t border-b py-8 flex flex-row gap-4 items-center ">
        <div className="hidden md:flex md:basis-1/3">
          <div className="border-2 md:border-4 lg:border-[0.3rem] border-blue-600 rounded-full flex items-center justify-center w-28 h-28 md:w-36 md:h-36">
            <h1 className="text-xl ">Post UTME</h1>
          </div>
        </div>
        <div className="md:basis-2/3">
          <h1 className="md:hidden my-4 text-xl ">Post UTME</h1>
          <p className="text-gray-700">{course.postutme}</p>
        </div>
      </div>
      <div className="my-4 py-8 md:py-4">
        <h1 className="mb-4 text-xl ">School Fees & Funding</h1>
        <ul className="text-gray-700">
          {course.feesAndFunding &&
            course.feesAndFunding.map((item, index) => (
              <li className="list-none" key={index}>
                {item}
              </li>
            ))}
        </ul>
      </div>
      {/* <div className="my-4 ">
        <h1 className="mb-4 textxl ">Similar Institutions</h1>
        <Cards />
      </div> */}
    </div>
  );
};

export default CourseDetailRight;
