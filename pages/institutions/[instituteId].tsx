import Head from "next/head";
import { institutionDetailInterface } from "../../types/interface";
import axios from "axios";
import InstitutionDetails from "../../components/InstitutionDetails/InstitutionDetails";

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

      <InstitutionDetails institute={institute} />
    </div>
  );
}

export async function getStaticProps(context: any) {
  const instituteId = context.params.instituteId;
  const { data } = await axios.get(
    `https://jc-course-2.onrender.com/api/institutions/institute/${instituteId}`
  );
  if (!data) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      institute: data?.institute,
    },
  };
}

export async function getStaticPaths() {
  const res = await axios.get(
    `https://jc-course-2.onrender.com/api/institutions/filter`
  );

  const data = await res.data;
  const path = data?.institutes.map((item: any) => ({
    params: { instituteId: item._id },
  }));
  return {
    paths: path,
    fallback: "blocking",
  };
}
