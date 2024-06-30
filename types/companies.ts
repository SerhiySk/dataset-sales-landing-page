export interface ICompanyLocation {
  street: string | null;
  address: string | null;
  full_address?: string | null;
  line_2: string | null;
  is_hq: boolean;
}

export interface ISimilarCompany {
  industry: string | null;
  link: string | null;
  location: string | null;
  name: string | null;
  logo: string | null;
  linkedin_id: string | null;
}

export interface IEmployee {
  role: string | null;
  name: string | null;
  avatar: string | null;
  linkedin_id: string | null;
}

export interface ICompany {
  _id: string;
  search_id: string;
  url: string;
  name: string | null;
  logo: string | null;
  industry: string | null;
  short_description: string | null;
  employees_count: number | null;
  follower_count: number | null;
  website: string | null;
  filter_out: boolean;
  company_size: number[];
  hq: string | null;
  company_type: string | null;
  founded_year: number | null;
  specialties: string[];
  description: string | null;
  locations: ICompanyLocation[];
  similar_companies: ISimilarCompany[];
  employees: IEmployee[];
  createdAt?: Date; // Optional, added by timestamps: true
  updatedAt?: Date; // Optional, added by timestamps: true
  isIframe?: boolean;
}
