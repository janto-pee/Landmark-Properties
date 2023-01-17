import React from "react";
import Card from "../Card/Card";
import { homeCardInterface } from "../../types/interface";
import Button from "../Button/Button";
import Link from "next/link";

const Cards = ({ courses }: { courses: homeCardInterface[] }) => {
  return (
    <div className="container w-[95%] py-4 pb-8 flex flex-col gap-4 items-center text-center mx-auto">
      <h1 className="mt-8 text-2xl font-[500] text-gray-800 ">
        Most visited Courses for Today
      </h1>
      <p className="hidden md:block">
        Click the courses to view the entry requirment of each course
      </p>
      <div className="px-2 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {courses.map((item: homeCardInterface, index: number) => {
          if (index < 8) {
            return <Card key={index} item={item} />;
          }
        })}
      </div>
      <Link href={`/courses?search=courses mt-4`}>
        <Button
          btnText="See More..."
          btnClass="border border-blue-500 text-[16px] rounded-3xl p-2 px-20 md:px-12 hover:bg-blue-300 text-blue-800 "
        />
      </Link>
    </div>
  );
};

export default Cards;
