import { useEffect, useState } from "react";
import Head from "next/head";
import AllCourses from "../../components/AllCourses/AllCourses";
import { courseCardInterface } from "../../types/interface";
import { useRouter } from "next/router";
import axios from "axios";

export default function Courses({
  allCourses,
}: {
  allCourses: courseCardInterface[];
}) {
  const router = useRouter();

  const search = router.query.search;
  const faculty = router.query.faculty;
  const department = router.query.department;
  const institutions = router.query.institutions;

  const [courses, setCourses] = useState(allCourses);
  const [searchCourse, setSearchCourse] = useState(search);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!loading) {
  //     const fetchFiltered = async () => {
  //       setLoading(true);
  //       const res = await fetch(
  //         `https://jc-course-2.onrender.com/api/courses/filtered?faculty=${faculty}&department=${department}&institutions=${institutions}`
  //       );
  //       const data = await res.json();
  //       setCourses(data);
  //       // console.log(data);
  //       setLoading(false);
  //     };
  //     fetchFiltered();
  //   }
  // }, [faculty, department, institutions]);

  useEffect(() => {
    if (searchCourse != "" && !loading) {
      const fetchSearch = async () => {
        setLoading(true);
        const res = await fetch(
          `https://jc-course-2.onrender.com/api/courses/filtered?search=${search}`
        );
        const data = await res.json();
        console.log(data);
        setSearchCourse(data);
        setLoading(false);
      };
      fetchSearch();
    }
  }, [searchCourse]);

  return (
    <div>
      <Head>
        <title>All Courses</title>
      </Head>
      <AllCourses courses={courses} setCourses={setCourses} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://jc-course-2.onrender.com/api/courses/featured"
  );
  const data = await res.data;
  if (!data) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  return {
    props: { allCourses: data?.courses },
    revalidate: 600,
  };
}
