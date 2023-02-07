import Head from "next/head";
import { useEffect } from "react";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import { courseDetailInterface } from "../../types/interface";
import axios from "axios";

export default function CourseDetail({
  course,
}: {
  course: courseDetailInterface;
}) {
  console.log(course);
  return (
    <div>
      <Head>
        <title>Course Details</title>
      </Head>

      <CourseDetails course={course} />
    </div>
  );
}

export async function getStaticProps(context: any) {
  const courseId = context.params.courseId;
  const { data } = await axios.get(
    `https://jc-course-2.onrender.com/api/courses/course/${courseId}`
  );
  if (!data) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      course: data?.course,
    },
  };
}

export async function getStaticPaths() {
  const res = await axios.get(
    `https://jc-course-2.onrender.com/api/courses/filtered`
  );

  const data = await res.data;
  const path = data?.courses?.map((item: any) => ({
    params: { courseId: item._id },
  }));
  return {
    paths: path,
    fallback: "blocking",
  };
}
