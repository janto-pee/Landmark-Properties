import Link from "next/link";
import React from "react";
import { eventInterface } from "../../types/interface";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

const EventCard = ({ item }: { item: eventInterface }) => {
  const bgImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${item.img})`;
  return (
    <div
      style={{
        backgroundImage: bgImage,
      }}
      className="relative max-w-sm p-6 bg-white border border-gray-200 md:h-96 rounded-lg shadow-md flex flex-col justify-end"
    >
      <Link href={`/events/${item.id}`} className="text-left">
        <div className="flex text-sm items-center gap-4 text-gray-200">
          <div className="flex items-center gap-2">
            <AiOutlineCalendar />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <GoLocation />
            <span>{item.location}</span>
          </div>
        </div>
        <h5 className="my-2 text-md tracking-tight text-gray-200 ">
          {item.title}
        </h5>
        <div className="hidden md:block absolute top-8 right-8 bg-gray-300 rounded-md p-6 flex items-center">
          <h1 className="">28</h1>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
