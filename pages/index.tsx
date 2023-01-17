import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";
import {
  coursesInterface,
  eventInterface,
  homeCardInterface,
} from "../types/interface";
import { eventsList, instituteInfo } from "../utils/data";
import { fetchData, homeData } from "../utils/fetchAPI";

export interface Iprops {
  courses: coursesInterface[];
  eventList: eventInterface[];
  homeCourse: homeCardInterface[];
}

export default function Home({ courses, eventList, homeCourse }: Iprops) {
  console.log(homeCourse);

  return (
    <div>
      <Head>
        <title>
          Jamb Courses| Joint Admission and Matriculation Board Courses
        </title>
      </Head>
      <Homepage courses={homeCourse} eventList={eventsList} />
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
