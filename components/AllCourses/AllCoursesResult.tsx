import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AllCoursesCards from "../Card/AllCoursesCards";
import { courseDetailInterface } from "../../types/interface";
import { selectFilter } from "../../utils/data";

const AllCoursesResult = ({
  courses,
}: {
  courses: courseDetailInterface[];
}) => {
  const [filterData, setFilterData] = useState("");
  const [searchData, setSearchData] = useState("");
  const searchedCourses = courses.filter((item) =>
    item.course.toLowerCase().includes(searchData.toLowerCase())
  );
  const filteredCourses = searchedCourses.filter((item) =>
    item.course.toLowerCase().includes(filterData.toLowerCase())
  );

  const handleFilter = (e: any) => {
    setFilterData(e.target.value);
    console.log(filterData);
  };

  const handleSearch = (e: any) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="w-full bg-white rounded-sm courses-search-result-boxshadow lg:col-span-3">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <span>{filteredCourses.length} results</span>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex px-2 py-2 rounded-md items-center justify-between border border-gray-300 bg-white gap-2">
            <select
              className="px-12"
              value={filterData}
              onChange={handleFilter}
            >
              {selectFilter.map((item, index) => (
                <option
                  key={index}
                  value={item.value}
                  className="text-gray-600"
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden lg:flex px-8 py-2 rounded-md items-center justify-between border border-gray-300 bg-white gap-2">
            <input
              type="text"
              placeholder="search for"
              className="border-none text-gray-900"
              value={searchData}
              onChange={handleSearch}
            />
            <AiOutlineSearch className="text-gray-800" />
          </div>
        </div>
      </div>
      <div className="p-4">
        {filteredCourses.length < 1 ? (
          <div>No course found</div>
        ) : (
          filteredCourses.map((item: courseDetailInterface, index: number) => {
            return <AllCoursesCards key={index} item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default AllCoursesResult;
