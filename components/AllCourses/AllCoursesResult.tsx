import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AllCoursesCards from "../Card/AllCoursesCards";
import { courseDetailInterface } from "../../types/interface";
import { localstate } from "../../utils/searchFilter";
import { useRouter } from "next/router";

const AllCoursesResult = ({
  courses,
  setCourses,
}: {
  courses: courseDetailInterface[];
  setCourses: any;
}) => {
  return (
    <div className="w-full bg-white rounded-sm courses-search-result-boxshadow lg:col-span-3">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <span>{courses.length} results</span>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex px-8 py-2 rounded-md items-center justify-between border border-gray-300 bg-white gap-2">
            <input
              type="text"
              placeholder="search for"
              className="border-none text-gray-900"
              onChange={(e) => {
                setCourses(e.target.value);
              }}
            />
            <AiOutlineSearch className="text-gray-800" />
          </div>
        </div>
      </div>
      <div className="p-4">
        {courses.length < 1 ? (
          <div>No course found</div>
        ) : (
          courses.map((item: courseDetailInterface, index: number) => {
            return <AllCoursesCards key={index} item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default AllCoursesResult;
