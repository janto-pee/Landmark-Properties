import React from "react";
import Link from "next/link";
import { courseDetailInterface, coursesInterface } from "../../types/interface";

const CourseDetailLeft = ({ course }: { course: courseDetailInterface }) => {
  return (
    <div className="hidden text-center md:text-left md:basis-2/6 p-4 md:flex md:flex-col md:border-r md:border-gray-300">
      <Link href="/" className="my-4">
        {" "}
        <button className="text-md text-blue-500 cursor-pointer">
          Course Details
        </button>
      </Link>
      <Link href="/" className="my-4">
        {" "}
        <button className="text-md text-blue-500 cursor-pointer">
          SSCE Requirments
        </button>
      </Link>
      <Link href="/" className="my-4">
        {" "}
        <button className="text-md text-blue-500 cursor-pointer">
          UTME Requirement
        </button>
      </Link>
      <Link href="/" className="my-4">
        {" "}
        <button className="text-md text-blue-500 cursor-pointer">
          Post UTME Requirement
        </button>
      </Link>
      <Link href="/" className="my-4">
        {" "}
        <button className="text-md text-blue-500 cursor-pointer">
          School fees & funding
        </button>
      </Link>
    </div>
  );
};

export default CourseDetailLeft;
