import Link from "next/link";
import React from "react";
import { institutionCardInterface } from "../../types/interface";
import { FcPositiveDynamic } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

const AllInstituteCards = ({ item }: { item: institutionCardInterface }) => {
  const {
    name,
    instituteSummary,
    pmb,
    address,
    tel,
    position,
    fullSchoolName,
  } = item;
  const imgpath = "/asset/cardimg2.jpg";
  return (
    <Link
      href={`/institutions/${item._id}`}
      className="relative flex flex-col items-center bg-white rounded-lg my-8 lg:mt-2 border-gray-200  md:flex-row border hover:bg-gray-100"
    >
      <div className="md:basis-1/2">
        <Image
          width={500}
          height={500}
          className="object-cover md:rounded"
          src={name ? `/${name}` : imgpath}
          alt=""
        />
      </div>
      <div className="md:basis-1/2 flex flex-col gap-2 p-4 md:px-12 leading-normal">
        <h5 className="mb-2 text-[18px] md:text-[22px] tracking-tight text-gray-800 hover:text-blue-800">
          {fullSchoolName}
        </h5>
        <p className="mb-3 text-[15px] md:text-md text-gray-500">
          {instituteSummary}
        </p>
        <div className="flex flex-col ">
          <div className="flex items-center gap-2">
            <FcPositiveDynamic />
            <p className="text-[15px] text-gray-500">
              {position} Ranked University 2022
            </p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <GoLocation />
            <p className="text-[15px] text-gray-500">{address}</p>
          </div>
          <div className="flex items-center gap-2">
            <FcPositiveDynamic />
            <p className="text-[15px] text-gray-500">{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllInstituteCards;
