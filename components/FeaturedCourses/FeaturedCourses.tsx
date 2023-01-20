import React from "react";
import Card from "../Card/Card";
// import { instituteInfo } from "../../utils/data";
import { courseDetailInterface } from "../../types/interface";

const FeaturedCourses = ({ courses }: { courses: courseDetailInterface[] }) => {
  return (
    <div className="px-2 py-2 pb-12 md:w-[95%] mx-auto mt-2 text-center">
      <h1 className="my-12 font-semibold text-2xl text-gray-900">
        Featured Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 lg:grid-cols-4 gap-8">
        {courses.map((item: any, index: number) => {
          if (index < 4) {
            return <Card key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FeaturedCourses;
