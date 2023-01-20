import Head from "next/head";
import AllCourses from "../../components/AllCourses/AllCourses";
import { institutionCard } from "../../utils/data";
import AllInstitutions from "../../components/Institutions/AllInstitutions";
import { institutionCardInterface } from "../../types/interface";

export default function Institutions({
  institute,
}: {
  institute: institutionCardInterface[];
}) {
  return (
    <div>
      <Head>
        <title>All Courses</title>
      </Head>
      <AllInstitutions institute={institutionCard} />
    </div>
  );
}
