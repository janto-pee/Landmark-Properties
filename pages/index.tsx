import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";
import {
  courseDetailInterface,
  eventInterface,
  homeCardInterface,
} from "../types/interface";
import { eventsList } from "../utils/data";
import { homeData } from "../utils/fetchAPI";

export interface Iprops {
  courses: courseDetailInterface[];
  eventList: eventInterface[];
  homeCourse: homeCardInterface[];
}

export default function Home({ homeCourse }: Iprops) {
  return (
    <div>
      <Head>
        <title>
          Jamb Courses| Joint Admission and Matriculation Board Courses
        </title>
      </Head>
      <Homepage courses={homeCourse} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await homeData();

  if (!res) {
    props: {
      hasError: true;
    }
  }

  return {
    props: { homeCourse: res },
  };
}
