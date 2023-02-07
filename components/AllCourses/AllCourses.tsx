import React, { useState } from "react";
import CoursesHero from "../Hero/CoursesHero";
import Navbar from "../Header/Navbar";
import AllCoursesResult from "./AllCoursesResult";
import Filter from "../Filtering/Filter";
import Footer from "../Footer/Footer";
import {
  courseCardInterface,
  courseDetailInterface,
} from "../../types/interface";
import MobileNavbar from "../Header/Mobile/MobileNavbar";

const AllCourses = ({
  courses,
  setCourses,
}: {
  courses: courseCardInterface[];
  setCourses: any;
}) => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <Navbar
        navClass="lg:flex items-center"
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />
      <div>
        {showNavbar && (
          <MobileNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        )}
      </div>
      <CoursesHero title="Courses" />
      <div className="bg-gray-100">
        <div className="px-2 lg:w-[95%] mx-auto py-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <AllCoursesResult courses={courses} setCourses={setCourses} />
          <Filter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCourses;
