import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";
import {
  courseDetailInterface,
  eventInterface,
  homeCardInterface,
} from "../types/interface";
import axios from "axios";

export interface Iprops {
  data: homeCardInterface[];
}

export default function Home({ data }: Iprops) {
  return (
    <div>
      <Head>
        <title>
          Jamb Courses| Joint Admission and Matriculation Board Courses
        </title>
      </Head>
      <Homepage courses={data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://jc-course-2.onrender.com/api/courses/featured"
  );
  const data = await res.data;

  if (!data) {
    props: {
      hasError: true;
    }
  }

  return {
    props: { data: data?.courses },
  };
}
