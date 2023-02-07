import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const headers = {
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDKEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
};

// export async function fetchData() {
//   // const data = res.json()
//   // return data
//   const res = instituteInfo;
//   return res;
// }

// export async function homeData() {
//   const data = await fetchData();

//   const homeCard = data.map((item) => ({
//     id: item.id,
//     schoolImg: item.schoolImg,
//     course: item.course,
//     utme: item.utme,
//     address: item.address,
//     years: item.years,
//     degreeAbbr: item.degreeAbbr,
//   }));

//   const res = homeCard.filter((item, index) => {
//     if (index < 8) {
//       return item;
//     }
//   });
//   return res;
// }

// export async function getAllCourses() {
//   const res = await fetchData();
//   return res;
// }

// export async function getCourse(id: string) {
//   const allData = await fetchData();

//   const res = allData.find((item) => item.id == id);
//   return res;
// }

// export async function search(id: string) {
//   const allData = await fetchData();
//   const search = allData.filter((item) =>
//     item.course.toLowerCase().includes(id.toLowerCase())
//   );
//   return search;
// }
