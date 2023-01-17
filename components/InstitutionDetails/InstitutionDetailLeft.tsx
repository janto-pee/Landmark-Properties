import React from "react";
import Link from "next/link";
import { courseDetailInterface } from "../../types/interface";
import { FcPositiveDynamic } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

const InstitutionDetailLeft = ({
  course,
}: {
  course: courseDetailInterface;
}) => {
  return (
    <div className="hidden text-center md:text-left lg:block rounded lg:basis-2/6 p-4 ">
      <div className="p-4 px-8 border">
        <h1 className="text-xl">Quick Info</h1>
        <div className="flex flex-col ">
          <div className="flex items-center gap-2 my-4">
            <FcPositiveDynamic />
            <p>4th Ranked University 2022</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <GoLocation />
            <p>Ile Ife, Osun State</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <FcPositiveDynamic />
            <p>OAU</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionDetailLeft;
