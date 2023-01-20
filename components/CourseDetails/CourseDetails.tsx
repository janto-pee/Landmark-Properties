import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import CourseDetailHero from "../Hero/CourseDetailHero";
import CourseDetailBreaker from "../Breaker/CourseDetailBreaker";
import Footer from "../Footer/Footer";
import CourseDetailLeft from "./CourseDetailLeft";
import CourseDetailRight from "./CourseDetailRight";
import { courseDetailInterface } from "../../types/interface";
import MobileNavbar from "../Header/Mobile/MobileNavbar";

const CourseDetails = ({ course }: { course: courseDetailInterface }) => {
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
      <CourseDetailHero course={course} />
      <div>
        <CourseDetailBreaker course={course} />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 my-8 md:my-16 w-[95%] mx-auto">
        <CourseDetailLeft course={course} />
        <CourseDetailRight course={course} />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
