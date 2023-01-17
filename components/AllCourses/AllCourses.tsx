import React from "react";
import CoursesHero from "../Hero/CoursesHero";
import Navbar from "../Header/Navbar";
import AllCoursesResult from "./AllCoursesResult";
import Filter from "../Filtering/Filter";
import Footer from "../Footer/Footer";
import { courseDetailInterface } from "../../types/interface";

const AllCourses = ({ courses }: { courses: courseDetailInterface[] }) => {
  return (
    <div>
      <Navbar navClass="lg:flex items-center" />
      <CoursesHero title="Courses" />
      <div className="bg-gray-100">
        <div className="px-2 lg:w-[95%] mx-auto py-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <AllCoursesResult courses={courses} />
          <Filter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCourses;
