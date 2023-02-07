import React from "react";
import Cards from "../Cards/Cards";
import { institutionDetailInterface } from "../../types/interface";
import { IoIosCheckmark } from "react-icons/io";
import Image from "next/image";

const InstitutionDetailRight = ({ institute }: { institute: any }) => {
  const imgpath = "/asset/cardgrad.jpg";
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

  const institutionSummaryPlaceholder = `${name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor officiis adipisci voluptatem ullam temporibus saepe eum placeat animi fuga.`;
  const postUtmePlaceholder = `${name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor officiis adipisci voluptatem ullam.`;
  const schoolFeePlaceholder = `${name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor officiis adipisci voluptatem ullam.`;
  return (
    <div className="w-full lg:basis-4/6 p-2">
      <div className="my-8 ">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600">Overview</h1>
        <p className="text-gray-400 md:text-gray-500">
          {instituteSummary && instituteSummary.length < 10
            ? institutionSummaryPlaceholder
            : instituteSummary}
        </p>
      </div>
      <div className="my-8 ">
        <Image width={500} height={500} src={`/${name}`} alt={name} />
      </div>
      <div className="my-8 py-4 border-t border-b ">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600">
          General Entry Requirment
        </h1>

        <p className="my-2 text-gray-400 md:text-gray-500">
          {entryRequirement}
        </p>
      </div>
      <div className="my-8 py-4">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600 ">
          Direct Entry Requirement
        </h1>
        <ul>
          <li className="flex items-center gap-4">
            <IoIosCheckmark />
            <span className="text-gray-400 md:text-gray-500">
              Use of English
            </span>
          </li>
          {directEntry && directEntry.length > 0
            ? directEntry.map((item: string[], index: number) => (
                <li
                  key={index}
                  className="my-2 flex items-center gap-4 text-gray-400 md:text-gray-500"
                >
                  <IoIosCheckmark />
                  <span>{item}</span>
                </li>
              ))
            : "coming soon"}
        </ul>
      </div>
      <div className="my-4 py-8 md:py-4">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600 ">Post Jamb</h1>
        <p className="my-2 text-gray-400 md:text-gray-500">
          {postUtme && postUtme.length < 4 ? postUtmePlaceholder : postUtme}
        </p>
      </div>
      <div className="my-4 py-8 md:py-4">
        <h1 className="mb-4 text-xl md:text-xl text-gray-600 ">School Fee</h1>
        <ul className="text-gray-400 md:text-gray-500">
          {schoolFee && schoolFee.length < 1
            ? schoolFeePlaceholder
            : schoolFee?.map((item: string[], index: number) => (
                <li className="list-none" key={index}>
                  {item}
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default InstitutionDetailRight;
