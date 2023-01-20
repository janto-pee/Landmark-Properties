import Head from "next/head";
import React, { Fragment } from "react";
import Contact from "../components/Contact/Contact";

const contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div>
        <Contact />
      </div>
    </Fragment>
  );
};

export default contact;
