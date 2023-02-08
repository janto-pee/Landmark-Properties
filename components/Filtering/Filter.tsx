import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowUpDownLine } from "react-icons/ri";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { useRouter } from "next/router";
import { getFilterValues, searchFilter } from "../../utils/searchFilter";

const Filter = () => {
  const [filters] = useState(searchFilter);
  const router = useRouter();
  const [toggleFilter, setToggleFilter] = useState(true);

  const searchProperties = (filtervalues: any) => {
    // console.log(filtervalues);
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filtervalues);

    values.forEach((item) => {
      if (item.value && filtervalues?.[item.name]) {
        console.log((query[item.name] = item.value));
      }
    });
    router.push({ pathname: path, query: query });
  };
  return (
    <div className="z-10 rounded order-first md:order-last dark:bg-gray-700 p-2 mt-4 md:mt-0 lg:col-span-1">
      <div>
        <div className="flex items-center justify-between my-4">
          <h1 className="text-xl">Filter</h1>
          {toggleFilter ? (
            <button onClick={() => setToggleFilter(!toggleFilter)}>
              <IoIosArrowDropdownCircle />
            </button>
          ) : (
            <button onClick={() => setToggleFilter(!toggleFilter)}>
              <IoIosArrowDropupCircle />
            </button>
          )}
        </div>
        {toggleFilter && (
          <ul
            className=" pb-3 text-sm text-gray-700 flex flex-col"
            aria-labelledby="dropdownSearchButton"
          >
            {filters?.map((items, i) => (
              <div className="w-full flex flex-col my-4" key={i}>
                <h4>{items.placeholder} </h4>
                <select
                  placeholder={items.placeholder}
                  className="bg-transparent p-2 border border-gray-600"
                  onChange={(e) => {
                    searchProperties(e.target.value);
                  }}
                >
                  {items?.item.map((item, i) => (
                    <option value={i} key={item.value + i}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
