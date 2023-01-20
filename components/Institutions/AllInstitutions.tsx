import React from "react";
import CoursesHero from "../Hero/CoursesHero";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import AllInstitutionResults from "./AllInstitutionResults";
import {
  institutionCardInterface,
  institutionDetailInterface,
} from "../../types/interface";

const AllInstitutions = ({
  institute,
}: {
  institute: institutionCardInterface[];
}) => {
  return (
    <div>
      <Navbar />
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
