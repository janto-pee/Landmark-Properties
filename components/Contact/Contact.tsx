import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import CoursesHero from "../Hero/CoursesHero";
import ContactBreaker from "../Breaker/ContactBreaker";
import ContactForm from "./ContactForm";
import Footer from "../Footer/Footer";
import MobileNavbar from "../Header/Mobile/MobileNavbar";

const Contact = () => {
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
      <CoursesHero title="Contact Us" />
      <ContactBreaker />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
