import React from "react";
import Link from "next/link";

import { FcPositiveDynamic } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { institutionCardInterface } from "../../types/interface";

const InstitutionDetailLeft = ({ institute }: { institute: any }) => {
  const {
    _id,
    name,
    instituteSummary,
    fullSchoolName,
    pmb,
    address,
    state,
    tel,
    position,
    universityType,
    entryRequirement,
    directEntry,
    postUtme,
    schoolFee,
    isFeatured,
    institutionType,
  } = institute;
  return (
    <div className="hidden text-center md:text-left lg:block rounded lg:basis-2/6 p-4 ">
      <div className="p-4 px-8 border">
        <h1 className="text-xl">Quick Info</h1>
        <div className="flex flex-col ">
          <div className="flex items-center gap-2 my-4">
            <FcPositiveDynamic />
            <p>{position} Ranked University 2022</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <GoLocation />
            <p>{address}</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <FcPositiveDynamic />
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionDetailLeft;
