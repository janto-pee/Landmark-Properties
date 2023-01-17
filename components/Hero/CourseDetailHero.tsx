import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { courseDetailInterface } from "../../types/interface";

const CourseDetailHero = ({ course }: { course: courseDetailInterface }) => {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="my-4 text-lg  font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">
          {course.degree}
        </h1>
        <p className="hidden md:block text-gray-200 text-xl my-4">
          <span className="text-gray-400">{course.department}:</span>{" "}
          {course.schoolfull}
        </p>
        <p className="md:hidden text-gray-200 text-md mt-4 mb-2">
          {course.department}
        </p>
        <p className="md:hidden text-gray-400 text-sm mb-4">
          {course.schoolfull}
        </p>
        <img
          src="/asset/cardimg3.jpg"
          className="w-48 h-48 rounded-lg mx-auto"
          alt=""
        />
      </div>
    </section>
  );
};

export default CourseDetailHero;
