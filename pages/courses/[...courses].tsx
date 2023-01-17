import Head from "next/head";
import AllCourses from "../../components/AllCourses/AllCourses";
import { eventsList, instituteInfo } from "../../utils/data";

export default function CoursesSearch() {
  return (
    <div>
      <Head>
        <title>All Courses</title>
      </Head>
      <AllCourses courses={instituteInfo} />
    </div>
  );
}
