import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { courseDetailInterface } from "../../types/interface";

const CourseDetailBreaker = ({ course }: { course: courseDetailInterface }) => {
  return (
    <section className="bg-white w-[95%] border mx-auto shadow-md course-detail-boxshadow my-4 lg:my-8">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
        <div className="grid grid-cols-1 gap-4  text-gray-900 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex gap-4 items-start w-full">
            <GrCertificate className="text-3xl" />
            <div className="flex flex-col items-start">
              <span className="mb-2 text-md">Qualification Type</span>
              <span className=" text-gray-500">{course.degree}</span>
            </div>
          </div>
          <div className="flex gap-4 items-start w-full">
            <GoLocation className="text-3xl" />
            <div className="flex flex-col items-start">
              <span className="mb-2 text-md">Location</span>
              <span className=" text-gray-500">{course.schools}</span>
            </div>
          </div>
          <div className="flex gap-4 items-start w-full">
            <BsBookmark className="text-3xl" />
            <div className="flex flex-col items-start">
              <span className="mb-2 text-md">Study Mode</span>
              <span className=" text-gray-500">{course.mode}</span>
            </div>
          </div>
          <div className="flex gap-4 items-start w-full">
            <AiOutlineClockCircle className="text-3xl" />
            <div className="flex flex-col items-start">
              <span className="mb-2 text-md">Duration</span>
              <span className=" text-gray-500">{course.years} years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailBreaker;
