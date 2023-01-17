import Head from "next/head";
import AllCourses from "../../components/AllCourses/AllCourses";
import { eventsList, instituteInfo } from "../../utils/data";
import AllInstitutions from "../../components/Institutions/AllInstitutions";

export default function Institutions() {
  return (
    <div>
      <Head>
        <title>All Courses</title>
      </Head>
      <AllInstitutions courses={instituteInfo} eventList={eventsList} />
    </div>
  );
}
