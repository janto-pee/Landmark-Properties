import React from "react";
import TopHeader from "../Header/TopHeader";
import Navbar from "../Header/Navbar";
import HomeHero from "../Hero/HomeHero";
import Cards from "../Cards/Cards";
import Breaker from "../Breaker/Breaker";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Footer from "../Footer/Footer";
import { eventInterface, homeCardInterface } from "../../types/interface";

const Homepage = ({ courses }: { courses: homeCardInterface[] }) => {
  return (
    <div>
      <TopHeader />
      <Navbar navClass="lg:hidden" />
      <HomeHero />
      <Cards courses={courses} />
      <Breaker />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default Homepage;
