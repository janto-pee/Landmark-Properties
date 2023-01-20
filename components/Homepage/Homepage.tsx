import React, { useState } from "react";
import TopHeader from "../Header/TopHeader";
import Navbar from "../Header/Navbar";
import HomeHero from "../Hero/HomeHero";
import Cards from "../Cards/Cards";
import Breaker from "../Breaker/Breaker";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Footer from "../Footer/Footer";
import { homeCardInterface } from "../../types/interface";
import MobileNavbar from "../Header/Mobile/MobileNavbar";

const Homepage = ({ courses }: { courses: homeCardInterface[] }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="relative">
      <TopHeader />
      <Navbar
        navClass="lg:hidden"
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />
      <div>
        {showNavbar && (
          <MobileNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        )}
      </div>
      <HomeHero />
      <Cards courses={courses} />
      <Breaker />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default Homepage;
