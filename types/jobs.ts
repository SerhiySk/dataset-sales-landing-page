export interface ISalary {
  currency: string | null;
  from: number | null;
  to: number | null;
  per: string | null;
}

export interface IShortCompany {
  logo: string | null;
  name: string | null;
  url: string | null;
}

export interface ILocation {
  city: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
  postal_code: string | null;
  region: string | null;
  street: string | null;
}

export interface IJob {
  _id: string;
  company: IShortCompany;
  companyRef: string | null; // Reference or populated Company

  employment_type: string | null;
  industry: string | null;
  job_description?: string | null;
  descriptionHTML?: string | null;
  job_function: string | null;
  linkedin_internal_id: string | null;
  location: ILocation;
  seniority_level: string | null;
  title: string | null;
  total_applicants: number | null;
  salary: ISalary;
  salaryText: string | null;
  postedDate: Date | null;
  workplace: string | null;
  searchText: string | null;
  workplaces: string[];
  createdAt?: Date; // Optional, added by timestamps:true
  updatedAt?: Date; // Optional, added by timestamps:true
}
