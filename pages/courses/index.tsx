import { useEffect, useState } from "react";
import Head from "next/head";
import AllCourses from "../../components/AllCourses/AllCourses";
import { instituteInfo } from "../../utils/data";
import { getAllCourses } from "../../utils/fetchAPI";
import { courseDetailInterface } from "../../types/interface";
import { useRouter } from "next/router";

export default function Courses({
  allCourses,
}: {
  allCourses: courseDetailInterface[];
}) {
  const [courses, setCourses] = useState(allCourses);

  const router = useRouter();
  const search = router.query.search;
  const localState = router.query.localState;
  const faculty = router.query.faculty;
  const department = router.query.department;
  const institution = router.query.institution;

  useEffect(() => {
    // const res = fetch(
    //   `localhost:3000/courses?search=${search}&localState=${localState}&faculty=${faculty}&department=${department}&institution=${institution}`
    // );
    // const data = res.json()
    // setCourses(res)
  }, []);

  return (
    <div>
      <Head>
        <title>All Courses</title>
      </Head>
      <AllCourses courses={courses} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await getAllCourses();

  return {
    props: { allCourses: res },
    revalidate: 600,
  };
}
