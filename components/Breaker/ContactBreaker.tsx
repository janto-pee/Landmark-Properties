import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const ContactBreaker = () => {
  return (
    <div className="container w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      <div className="flex items-start flex-col md:flex-row md:justify-between md:items-center my-20">
        <div className="flex flex-col md:gap-2 md:items-center">
          <GoLocation className="text-[2rem] md:text-[5rem] text-gray-600 font-light" />
          <p className="text-lg my-2 md:my-0">Our Location</p>
          <p className="text-sm text-gray-600">Lekki, Lagos State</p>
        </div>
        <div className="flex flex-col gap-2 md:text-center md:items-center my-4 md:my-0">
          <AiOutlinePhone className="text-[2rem] md:text-[5rem] text-gray-600" />
          <p className="text-lg my-2 md:my-0">Our Contact</p>
          <p className="text-sm text-gray-600">+2348022438018</p>
        </div>
        <div className="flex flex-col md:items-center gap-2 ">
          <AiOutlineMail className="text-[2rem] md:text-[5rem] text-gray-600" />
          <p className="text-lg my-2 md:my-0">Our Email</p>
          <p className="text-sm text-gray-600">JambitePortal@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBreaker;
