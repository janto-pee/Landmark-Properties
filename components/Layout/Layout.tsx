import Head from "next/head";
import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
