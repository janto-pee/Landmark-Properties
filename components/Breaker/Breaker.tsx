import React from "react";

const Breaker = () => {
  return (
    <div className="w-full bg-gray-800 shadow-md py-[5rem] home-breaker">
      <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-gray-100">250+</dt>
          <dd className="font-light text-gray-200">Universities</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-gray-100">100+</dt>
          <dd className="font-light text-gray-400">Polytechnics</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-gray-100">20+</dt>
          <dd className="font-light text-gray-400">Monotechnics</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-gray-100">60+</dt>
          <dd className="font-light text-gray-400">Colleges</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-gray-100">50+</dt>
          <dd className="font-light text-gray-400">Vocational Degree</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-gray-100">50+</dt>
          <dd className="font-light text-gray-400">Postgraduate</dd>
        </div>
      </dl>
    </div>
  );
};

export default Breaker;
