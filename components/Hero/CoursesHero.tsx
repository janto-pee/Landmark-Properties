import React from "react";

const CoursesHero = ({ title }: { title?: any }) => {
  return (
    <section className="bg-gray-900 course-hero">
      <div className="py-16 md:py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CoursesHero;
