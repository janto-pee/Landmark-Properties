import Head from "next/head";
import { courseDetailInterface } from "../../types/interface";
import InstitutionDetails from "../../components/InstitutionDetails/InstitutionDetails";
import { courseDetail } from "../../utils/data";

export default function InstituteDetail({
  course,
}: {
  course: courseDetailInterface;
}) {
  return (
    <div>
      <Head>
        <title>Course Details</title>
      </Head>

      <InstitutionDetails course={courseDetail} />
    </div>
  );
}
