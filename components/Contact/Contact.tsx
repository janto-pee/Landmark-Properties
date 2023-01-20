import React from "react";
import Navbar from "../Header/Navbar";
import CoursesHero from "../Hero/CoursesHero";
import ContactBreaker from "../Breaker/ContactBreaker";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <CoursesHero title="Contact Us" />
      <ContactBreaker />
      <ContactForm />
    </div>
  );
};

export default Contact;
