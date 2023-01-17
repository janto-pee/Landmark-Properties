export interface homeCardInterface {
  id: string;
  schoolImg?: string;
  course: string;
  utme: string[];
  address?: string;
  years?: string | number;
  degreeAbbr: string;
}

export interface courseDetailInterface {
  id: string;
  course: string;
  courseImg?: string;
  schools: string;
  schoolImg?: string;
  schoolfull?: string;
  courseSummary?: string;
  postutme?: string;
  requirement: string[];
  feesAndFunding?: (string | number)[];
  ssce: string[];
  utme: string[];
  cardUtme: string;
  remark: string[];
  years?: number | string;
  degree?: string;
  degreeAbbr?: string;
  mode?: string;
  department?: string;
  directEntry?: string;
  address?: string;
}

export interface coursesInterface {
  id: string;
  course: string;
  courseImg?: string;
  schools: string;
  schoolImg?: string;
  schoolfull?: string;
  courseSummary?: string;
  postUtme?: string;
  requirement: string[];
  feesAndFunding?: string[];
  ssce: string[];
  utme: string[];
  cardUtme: string;
  remark: string[];
  years?: number | string;
  degree?: string;
  degreeAbbr?: string;
  mode?: string;
  department?: string;
  directEntry?: string;
  address?: string;
}

export interface eventInterface {
  id: string;
  location: string;
  date: string;
  title: string;
  img: string;
  description: string;
}
export interface filterInterface {
  name: string;
  value: string | number;
  count?: string | number;
}

export interface institutionInterface {
  id: string;
  name: string;
  instituteSummary: string;
  fullname: string;
  pmb?: string;
  address?: string;
  tel?: string;
}
