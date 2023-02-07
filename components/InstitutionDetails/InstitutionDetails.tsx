import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { institutionDetailInterface } from "../../types/interface";
import CoursesHero from "../Hero/CoursesHero";
import InstitutionDetailLeft from "./InstitutionDetailLeft";
import InstitutionDetailRight from "./InstitutionDetailRight";
import MobileNavbar from "../Header/Mobile/MobileNavbar";

const InstitutionDetails = ({
  institute,
}: {
  institute?: institutionDetailInterface;
}) => {
  const title = institute && institute?.fullSchoolName;
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
      <CoursesHero title={title} />

      <div className="flex flex-col md:flex-row items-start gap-4 my-4 w-[95%] mx-auto">
        {<InstitutionDetailRight institute={institute} />}
        {<InstitutionDetailLeft institute={institute} />}
      </div>
      <Footer />
    </div>
  );
};

export default InstitutionDetails;
