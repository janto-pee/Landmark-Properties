import Head from "next/head";
import { useEffect, useState } from "react";
import AllCourses from "../../components/AllCourses/AllCourses";
// import { institutionCard } from "../../utils/data";
import AllInstitutions from "../../components/Institutions/AllInstitutions";
import { institutionCardInterface } from "../../types/interface";
import axios from "axios";
import { useRouter } from "next/router";

export default function Institutions({
  allInstitution,
}: {
  allInstitution: institutionCardInterface[];
}) {
  // console.log(allInstitution);
  const router = useRouter();
  const search = router.query.search;
  const localState = router.query.localState;
  const institutions = router.query.institutions;

  const [institution, setInstitution] = useState(allInstitution);
  const [searchInstitute, setSearchInstitute] = useState(search);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchFiltered = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://jc-course-2.onrender.com/api/institution/filter?localState=${localState}&institutions=${institutions}`
  //     );
  //     const data = await res.data;
  //     setInstitution(data);
  //     setLoading(false);
  //   };
  //   fetchFiltered();
  // }, [localState, institutions]);

  // useEffect(() => {
  //   if (searchInstitute !== "") {
  //     const fetchSearch = async () => {
  //       setLoading(true);
  //       const res = await axios.get(
  //         `https://jc-course-2.onrender.com/api/institutions/filter?search=${search}`
  //       );
  //       const data = await res.data;
  //       setSearchInstitute(data);
  //       setLoading(false);
  //     };
  //     fetchSearch();
  //   }
  // }, [searchInstitute]);

  return (
    <div>
      <Head>
        <title>All institution</title>
      </Head>
      <AllInstitutions institute={institution} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://jc-course-2.onrender.com/api/institutions/university"
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
    props: { allInstitution: data?.institutes },
    revalidate: 600,
  };
}
