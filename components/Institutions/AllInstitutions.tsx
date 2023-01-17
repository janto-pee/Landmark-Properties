import React from "react";
import CoursesHero from "../Hero/CoursesHero";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { coursesInterface, eventInterface } from "../../types/interface";
import AllInstitutionResults from "./AllInstitutionResults";
import Filter from "../Filtering/Filter";

const AllInstitutions = ({
  courses,
  eventList,
}: {
  courses: coursesInterface[];
  eventList: eventInterface[];
}) => {
  return (
    <div>
      <Navbar />
      <CoursesHero title="Institutions" />
      <div className="bg-gray-100">
        <div className="px-2 lg:w-[95%] mx-auto py-8 grid grid-cols-1 ">
          <AllInstitutionResults courses={courses} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllInstitutions;
