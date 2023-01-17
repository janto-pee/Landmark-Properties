import React from "react";
import EventCard from "../Card/EventCard";
import { eventInterface } from "../../types/interface";

const UpcomingEvents = ({ eventList }: { eventList: eventInterface[] }) => {
  return (
    <div className="container px-2 sm:px-4 py-4 my-8 flex flex-col gap-4 items-center text-center mx-auto">
      <h1 className="mt-8 text-2xl font-semibold">Upcoming Events</h1>
      <p className="hidden md:block">
        You can click the courses to view the entry requirment and cut off mark
        of each course
      </p>
      <div className="px-4 mt-8 md:w-[95%] md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {eventList.map((item: eventInterface, index: number) => {
          if (index < 3) {
            return <EventCard key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
