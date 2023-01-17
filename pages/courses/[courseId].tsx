import Head from "next/head";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import { courseDetailInterface } from "../../types/interface";
import { getAllCourses, getCourse } from "../../utils/fetchAPI";

export default function CourseDetail({
  course,
}: {
  course: courseDetailInterface;
}) {
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
  const data = await getCourse(courseId);
  return {
    props: {
      course: data,
    },
  };
}
export async function getStaticPaths() {
  const allData = await getAllCourses();
  const path = allData.map((item) => ({ params: { courseId: item.id } }));
  return {
    paths: path,
    fallback: "blocking",
  };
}
