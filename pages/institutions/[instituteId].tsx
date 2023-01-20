import Head from "next/head";
import { institutionDetailInterface } from "../../types/interface";
import InstitutionDetails from "../../components/InstitutionDetails/InstitutionDetails";
import { institutionDetail } from "../../utils/data";

export default function InstituteDetail({
  institute,
}: {
  institute: institutionDetailInterface;
}) {
  return (
    <div>
      <Head>
        <title>Course Details</title>
      </Head>

      <InstitutionDetails institute={institutionDetail} />
    </div>
  );
}
