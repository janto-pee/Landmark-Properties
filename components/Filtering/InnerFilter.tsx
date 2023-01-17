import React from "react";
import { filterInterface } from "../../types/interface";

const InnerFilter = ({ item }: { item: filterInterface }) => {
  return (
    <li className="my-4">
      <div className="flex items-center justify-between hover:bg-gray-100">
        <div className="flex items-center gap-4">
          <input
            id="checkbox-item-1"
            type="checkbox"
            value={item.value}
            name={item.name}
            onChange={() => {}}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
          />
          <label
            htmlFor="checkbox-item-11"
            className="w-full ml-2 text-md  text-gray-700  "
          >
            {item.name}
          </label>
        </div>
        <span>{item.count}</span>
      </div>
    </li>
  );
};

export default InnerFilter;
