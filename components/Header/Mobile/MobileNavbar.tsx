import Link from "next/link";
import React from "react";

const MobileNavbar = ({
  showNavbar,
  setShowNavbar,
}: {
  showNavbar: boolean;
  setShowNavbar: any;
}) => {
  return (
    <div
      className="bg-black text-white absolute top-0 right-0 w-full p-4 h-screen hidden"
      id="navbar-default-mobile"
    >
      <div className="text-md ml-auto flex justify-between">
        <div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NextEvents
          </span>
        </div>
        <button
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        >
          x
        </button>
      </div>
      <ul className="flex mt-4 flex-col space-y-4">
        <li>
          <Link
            href="/"
            className="block py-2 pl-3  text-sm md:text-cyan-50"
            aria-current="page"
          >
            All Events
          </Link>
        </li>
        <li>
          <Link
            href={`/courses?search=university`}
            className="block py-2 pl-3 text-white rounded"
          >
            Universities Courses
          </Link>
        </li>{" "}
        <li>
          <Link
            href={`/courses?search=polytechnic`}
            className="block py-2 pl-3 text-white rounded"
          >
            Polytechnic Courses
          </Link>{" "}
        </li>
        <li>
          <Link
            href={`/courses?search=post-secondary`}
            className="block py-2 pl-3 text-white rounded"
          >
            Other Degrees
          </Link>{" "}
        </li>
        <li>
          <Link
            href={`/institutions?search=university`}
            className="block py-2 pl-3 text-white rounded"
          >
            Institutions
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block py-2 pl-3 text-white rounded "
            aria-current="page"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
