import Link from "next/link";
import React from "react";
import { eventInterface } from "../../types/interface";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

const EventCard = ({ item }: { item: eventInterface }) => {
  console.log(item);
  const newTime = new Date().toLocaleTimeString();
  const newDate = new Date().toLocaleDateString();

  const newImg = item.thumbnail ? item?.thumbnail : "/asset/cardimg4.jpg";
  const bgImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${newImg})`;

  return (
    <div
      style={{
        backgroundImage: bgImage,
      }}
      className="relative max-w-sm p-6 bg-white border border-gray-200 md:h-96 rounded-lg shadow-md flex flex-col justify-end"
    >
      <a href={item.url} className="text-left">
        <div className="flex text-sm items-start flex-col gap-4 text-gray-200">
          <div className="flex items-center  gap-2">
            <span className="text-md md:text-lg">
              {item.name.substring(0, 70)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineCalendar />
            <span>{newDate}</span>
          </div>
        </div>
        <h5 className="my-2 text-md tracking-tight text-gray-200 ">
          {item.title}
        </h5>
        <div className="hidden md:block absolute top-8 right-8 bg-gray-300 rounded-md p-6 items-center">
          <h1 className="">{newTime}</h1>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
