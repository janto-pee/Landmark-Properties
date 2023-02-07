export interface homeCardInterface {
  _id: string;
  course: string;
  degreeAbbr: string;
  schools: string;
  utme: string;
  faculty: string;
  years?: string | number;
}

export interface courseCardInterface {
  _id: string;
  course: string;
  degreeAbbr: string;
  schools: string;
  utme: string;
  faculty: string;
  years?: string | number;
}

export interface courseDetailInterface {
  _id: string;
  utme: string;
  course: string;
  image: string;
  schools: string;
  courseSummary: string;
  ssce: [string];
  remark?: [string];
  years: string;
  degree: string;
  degreeAbbr: string;
  mode: string;
  faculty: string;
  directEntry?: string;
  isFeatured: boolean;
  institutionType: string;
  isFeatured?: boolean;
  requirement?: [];
  remark?: [];
  directEntry?: string;
  instituteProp?: institutionDetailInterface;
}

export interface institutionCardInterface {
  _id: string;
  name: string;
  instituteSummary: string;
  fullSchoolName: string;
  pmb?: string;
  address?: string;
  position?: string;
  tel?: string;
}

export interface institutionDetailInterface {
  _id: string;
  name: string;
  instituteSummary?: string;
  fullSchoolName?: string;
  pmb: string;
  address: string;
  state: string;
  tel: string;
  position?: string;
  universityType?: string;
  postUtme?: string;
  schoolFee?: string[];
  isFeatured?: Boolean;
  institutionType: string;
  directEntry?: string[];
  entryRequirement?: string[];
  remark?: string[];
  requirement?: string[];
}

export interface eventInterface {
  id: number | string;
  name: string;
  thumbnail: string;
  title: string;
  image: any;
  description: string;
  url?: string;
  provider?: any;
}

export interface filterInterface {
  name: string;
  value: string | number;
  count?: string | number;
}
