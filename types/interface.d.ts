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

export interface eventInterface {
  id: number | string;
  name: string;
  location: string;
  datePublished: string;
  title: string;
  image: any;
  description: string;
  url?: string;
  provider?: any[];
}

export interface filterInterface {
  name: string;
  value: string | number;
  count?: string | number;
}

export interface institutionCardInterface {
  id: string;
  name: string;
  instituteSummary: string;
  fullname: string;
  pmb?: string;
  address?: string;
  position?: string;
  tel?: string;
  instituteImg?: string;
}

export interface institutionDetailInterface {
  id: string;
  name: string;
  instituteSummary: string;
  fullname: string;
  instituteImg?: string;
  pmb?: string;
  address?: string;
  tel?: string;
  position: string;
  state: string;
  faculty?: string[];
  department?: string[];
}
