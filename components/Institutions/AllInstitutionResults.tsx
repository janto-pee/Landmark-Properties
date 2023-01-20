import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  courseDetailInterface,
  institutionCardInterface,
} from "../../types/interface";
import { selectFilter } from "../../utils/data";
import AllInstituteCards from "../Card/AllInstituteCards";
import Button from "../Button/Button";

const AllInstitutionResults = ({
  institute,
}: {
  institute: institutionCardInterface[];
}) => {
  return (
    <div className="w-full bg-white rounded-sm courses-search-result-boxshadow lg:col-span-3">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between border-b border-gray-200 p-4">
        <span>{institute.length} results</span>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="hidden lg:flex px-2 py-2 rounded-md items-center justify-between border border-gray-300 bg-white gap-2">
            <select className="px-12  ">
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
          <div className="flex px-8 py-2 rounded-md items-center justify-between border border-gray-300 bg-white gap-2">
            <input
              type="text"
              placeholder="search for"
              className="border-none text-gray-900 w-full"
            />
            <AiOutlineSearch className="text-gray-800" />
          </div>
        </div>
      </div>
      <div className="p-4 md:w-[95%] mx-auto flex flex-col justify-center">
        {institute &&
          institute.map((item: institutionCardInterface, index: number) => {
            return <AllInstituteCards key={index} item={item} />;
          })}
        <div className="mx-auto my-8">
          <Button
            btnText="See More"
            btnClass="border border-blue-500 text-[16px] rounded-3xl p-2 px-20 md:px-12 hover:bg-blue-300 text-blue-800 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AllInstitutionResults;
