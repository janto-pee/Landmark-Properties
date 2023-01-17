import { instituteInfo } from "./data";

export async function fetchData() {
  // const res = await fetch('');
  // const data = res.json()
  // return data
  const res = instituteInfo;
  return res;
}

export async function homeData() {
  const data = await fetchData();

  const homeCard = data.map((item) => ({
    id: item.id,
    schoolImg: item.schoolImg,
    course: item.course,
    utme: item.utme,
    address: item.address,
    years: item.years,
    degreeAbbr: item.degreeAbbr,
  }));

  console.log(homeCard);

  const res = homeCard.filter((item, index) => {
    if (index < 8) {
      return item;
    }
  });
  return res;
}
export async function getAllCourses() {
  const res = await fetchData();
  return res;
}

export async function getCourse(id: string) {
  const allData = await fetchData();

  const res = allData.find((item) => item.id == id);
  return res;
}

export async function search(id: string) {
  const allData = await fetchData();
  const search = allData.filter((item) =>
    item.course.toLowerCase().includes(id.toLowerCase())
  );
  return search;
}
