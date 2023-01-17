import React from "react";
import Navbar from "../Header/Navbar";
import CourseDetailHero from "../Hero/CourseDetailHero";
import CourseDetailBreaker from "../Breaker/CourseDetailBreaker";
import Footer from "../Footer/Footer";
import CourseDetailLeft from "./CourseDetailLeft";
import CourseDetailRight from "./CourseDetailRight";
import { courseDetailInterface } from "../../types/interface";

const CourseDetails = ({ course }: { course: courseDetailInterface }) => {
  return (
    <div>
      <Navbar />
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
