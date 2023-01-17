import React, { useState } from "react";
import { filterData } from "../../utils/data";
import InnerFilter from "./InnerFilter";
import { RiArrowDropDownLine } from "react-icons/ri";
import { filterInterface } from "../../types/interface";
import { selectFilter as filt } from "../../utils/data";

const Filter = () => {
  const [localState, setLocalState] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <div className="z-10 rounded  dark:bg-gray-700 p-2 mt-4 md:mt-0 lg:col-span-1">
      <div>
        <div className="flex items-center justify-between my-4">
          <h1 className="text-xl">Universities</h1>
          <RiArrowDropDownLine />
        </div>
        <ul
          className=" pb-3 text-sm text-gray-700"
          aria-labelledby="dropdownSearchButton"
        >
          {filt.map((item: any, index: number) => (
            <InnerFilter key={index} item={item} />
          ))}
        </ul>
      </div>
      <div className="my-4">
        <div className="flex items-center justify-between my-4">
          <h1 className="text-xl">Polytechnics</h1>
          <RiArrowDropDownLine />
        </div>
        <ul
          className=" pb-3 text-sm text-gray-700"
          aria-labelledby="dropdownSearchButton"
        >
          {filt.map((item: any, index: number) => (
            <InnerFilter key={index} item={item} />
          ))}
        </ul>
      </div>
      <div className="my-4">
        <div className="flex items-center justify-between my-4">
          <h1 className="text-xl">Colleges</h1>
          <RiArrowDropDownLine />
        </div>
        <ul
          className=" pb-3 text-sm text-gray-700"
          aria-labelledby="dropdownSearchButton"
        >
          {filt.map((item: any, index: number) => (
            <InnerFilter key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
