import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { institutionDetailInterface } from "../../types/interface";
import CoursesHero from "../Hero/CoursesHero";
import InstitutionDetailLeft from "./InstitutionDetailLeft";
import InstitutionDetailRight from "./InstitutionDetailRight";

const InstitutionDetails = ({
  institute,
}: {
  institute: institutionDetailInterface;
}) => {
  return (
    <div>
      <Navbar />
      <CoursesHero title="Obafemi Awolowo University" />

      <div className="flex flex-col md:flex-row items-start gap-4 my-4 w-[95%] mx-auto">
        <InstitutionDetailRight institute={institute} />
        <InstitutionDetailLeft institute={institute} />
      </div>
      <Footer />
    </div>
  );
};

export default InstitutionDetails;
