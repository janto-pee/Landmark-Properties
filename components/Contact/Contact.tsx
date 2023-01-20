import React from "react";
import Navbar from "../Header/Navbar";
import CoursesHero from "../Hero/CoursesHero";
import ContactBreaker from "../Breaker/ContactBreaker";
import ContactForm from "./ContactForm";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <CoursesHero title="Contact Us" />
      <ContactBreaker />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
