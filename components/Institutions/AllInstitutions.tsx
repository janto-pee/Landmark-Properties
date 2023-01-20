import React, { useState } from "react";
import CoursesHero from "../Hero/CoursesHero";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import AllInstitutionResults from "./AllInstitutionResults";
import {
  institutionCardInterface,
  institutionDetailInterface,
} from "../../types/interface";
import MobileNavbar from "../Header/Mobile/MobileNavbar";

const AllInstitutions = ({
  institute,
}: {
  institute: institutionCardInterface[];
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
      <CoursesHero title="Institutions" />
      <div className="bg-gray-100">
        <div className="px-2 lg:w-[95%] mx-auto py-8 grid grid-cols-1 ">
          <AllInstitutionResults institute={institute} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllInstitutions;
