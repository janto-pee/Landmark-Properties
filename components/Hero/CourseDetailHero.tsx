import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { courseDetailInterface } from "../../types/interface";
import Image from "next/image";

const CourseDetailHero = ({ course }: { course: courseDetailInterface }) => {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <p className="hidden md:flex justify-center text-gray-200 text-md mt-4 mb-2">
          {course.degree && course.degree}
        </p>
        <h1 className="my-4 text-lg  font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">
          {course.course && course.course}
        </h1>
        {/* <p className="md:hidden text-gray-400 text-sm mb-4">{course?.instituteProp[0]?.fullSchoolName}</p> */}
        <Image
          width={500}
          height={500}
          src={`/asset/images/${course.schools}.jpeg`}
          className="w-48 h-48 rounded-lg mx-auto"
          alt=""
        />
      </div>
    </section>
  );
};

export default CourseDetailHero;
