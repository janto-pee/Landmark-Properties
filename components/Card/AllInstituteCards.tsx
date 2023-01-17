import Link from "next/link";
import React from "react";
import { coursesInterface } from "../../types/interface";
import { FcPositiveDynamic } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

const AllInstituteCards = ({ item }: { item: coursesInterface }) => {
  return (
    <Link
      href={`/institutions/${item.id}`}
      className="relative flex flex-col items-center bg-white rounded-lg my-8 lg:mt-2 border-gray-200  md:flex-row border hover:bg-gray-100"
    >
      <div className="md:basis-1/2">
        <img
          className="object-cover md:rounded"
          src="/asset/cardimg2.jpg"
          alt=""
        />
      </div>
      <div className="md:basis-1/2 flex flex-col gap-2 p-4 md:px-12 leading-normal">
        <h5 className="mb-2 text-[18px] md:text-[22px] tracking-tight text-gray-800 hover:text-blue-800">
          Obafemi Awolowo University
        </h5>
        <p className="mb-3 text-[15px] md:text-md text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          corporis voluptatum! Expedita temporibus eum provident harum dolore
          iure voluptatibus et.
        </p>
        <div className="flex flex-col ">
          <div className="flex items-center gap-2">
            <FcPositiveDynamic />
            <p className="text-[15px] text-gray-500">
              4th Ranked University 2022
            </p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <GoLocation />
            <p className="text-[15px] text-gray-500">Ile Ife, Osun State</p>
          </div>
          <div className="flex items-center gap-2">
            <FcPositiveDynamic />
            <p className="text-[15px] text-gray-500">OAU</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllInstituteCards;
