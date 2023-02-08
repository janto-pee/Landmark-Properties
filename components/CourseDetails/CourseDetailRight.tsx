import React from "react";
import Cards from "../Cards/Cards";
import {
  courseDetailInterface,
  institutionDetailInterface,
} from "../../types/interface";
import { IoIosCheckmark } from "react-icons/io";

const CourseDetailRight = ({ course }: { course: courseDetailInterface }) => {
  const {
    _id,
    utme,
    image,
    schools,
    courseSummary,
    ssce,
    years,
    degree,
    degreeAbbr,
    mode,
    faculty,
    institutionType,
    isFeatured,
    requirement,
    remark,
    directEntry,
    instituteProp,
  } = course;

  const entryRequirementPlaceholder = [
    "1.The Entrance Examination is conducted by JAMB. In addition to attaining the required standard in entrance examination",
    "candidates must satisfy the general University as well as specific Faculty requirements.For the general requirement",
    "candidates must obtain at least a credit pass in five subjects at S.S.C.E. O’Level or approved equivalent",
    "including English Language and Mathematics at not more than two sittings (See tables for other faculty requirements).",
  ];

  const courseSummaryPlaceholder = `Please read carefully about the entry requirements, O'Level and post-UTME requirement of ${course.course.toLowerCase()}`;
  const postUtmePlaceholder =
    "Generally, PostUTME screening are carried out after JAMB examination for candidates who meet the cut off mark of selected courses. Therefore, postutme information will be available after JAMB";
  const schoolFeesPlacholder =
    "No school fees information available yet for this course";
  const utmeArray = utme.split(",");
  let entryReq;
  if (instituteProp?.entryRequirement != undefined) {
    entryReq = instituteProp.entryRequirement;
  } else {
    entryReq = courseSummaryPlaceholder;
  }

  return (
    <div className="w-full md:basis-[78%] p-4">
      <div className="my-8 ">
        <h1 className="mb-4 text-2xl">Course Summary</h1>
        <p className="text-gray-700">{entryReq}</p>
      </div>
      <div className="my-8 py-4 border-t border-b ">
        <h1 className="mb-4 text-xl ">SSCE Requirements</h1>
        <ul>
          {ssce.map((item: any, index: number) => (
            <li key={index} className="my-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8 py-4">
        <h1 className="mb-4 text-xl ">UTME Requirment</h1>
        <ul>
          <li className="flex items-center gap-4">
            <IoIosCheckmark />
            <span className="text-gray-700">Use of English</span>
          </li>
          {utmeArray?.map((item: any, index: number) => (
            <li
              key={index}
              className="my-2 flex items-center gap-4 text-gray-700"
            >
              <IoIosCheckmark />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4 border-t border-b py-8 flex flex-row gap-4 items-center ">
        <div className="hidden md:flex md:basis-1/3">
          <div className="border-2 md:border-4 lg:border-[0.3rem] border-blue-600 rounded-full flex items-center justify-center w-28 h-28 md:w-36 md:h-36">
            <h1 className="text-xl ">Post UTME</h1>
          </div>
        </div>
        <div className="md:basis-2/3">
          <h1 className="md:hidden my-4 text-xl ">Post UTME</h1>
          <p className="text-gray-700">{postUtmePlaceholder}</p>
        </div>
      </div>
      <div className="my-4 py-8 md:py-4">
        <h1 className="mb-4 text-xl ">School Fees & Funding</h1>
        <ul className="text-gray-700">
          {instituteProp?.schoolFee && instituteProp.schoolFee.length > 0
            ? instituteProp.schoolFee.map((item: any, index: number) => (
                <li className="list-none" key={index}>
                  {item}
                </li>
              ))
            : schoolFeesPlacholder}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailRight;
