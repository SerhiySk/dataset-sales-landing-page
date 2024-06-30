export interface IProfileExperience {
  company: string | null;
  company_linkedin_profile_url: string | null;
  description: string | null;
  id: string | null;
  starts_at: Date | null;
  linkedin_id?: string | null;
  employment?: string | null;
  is_process_id?: boolean;
  ends_at: Date | null;
  starts_at_str?: string | null;
  ends_at_str?: string | null;
  location: string | null;
  title: string | null;
  logo?: string | null;
}
export interface VolunteeringExperience extends IProfileExperience {
  area: string | null;
}

export interface iProfileExperienceHidden {
  company: string | null;
  company_linkedin_profile_url: string | null;
  id: string | null;
  location: string | null;
}

export interface ProfileVolunteeringExperience {
  company: string | null;
  company_linkedin_profile_url: string | null;
  description: string | null;
  id: string | null;
  starts_at: Date | null;
  ends_at: Date | null;

  area: string | null;
  title: string | null;
}
export interface ProfileCertification {
  name: string | null;
  company: string | null;
  company_linkedin_profile_url: string | null;
  description: string | null;
  id: string | null;
  linkedin_id?: string | null;
  certificate_url?: string | null;
  issued_at: Date | null;
  issued_at_str: string | null;
  expires_at: Date | null;
  expires_at_str: string | null;
}
export interface ProfileRecommendations {
  full_name: string | null;
  url: string | null;
  description: string | null;
  id: string | null;
}
export interface ProfileHonorAward {
  name: string | null;
  issued_by: string | null;
  description: string | null;
  issued_at: string | null;
}

export interface IProfileEducation {
  school: string | null;
  school_linkedin_profile_url: string | null;
  logo: string | null;
  description: string | null;
  id: string | null;
  starts_at: Date | null;
  ends_at: Date | null;
  starts_at_str?: string | null;
  ends_at_str?: string | null;
  location: string | null;
  fields_of_study: string[] | null;
  degree_name: string | null;
}
export interface IProfileEducationHidden {
  school: string | null;
  school_linkedin_profile_url: string | null;
  id: string | null;
  starts_at: Date | null;
  ends_at: Date | null;
  description: string | null;

  starts_at_str?: string | null;
  ends_at_str?: string | null;
  location: string | null;
}
export interface IWebsite {
  name: string | null;
  url: string | null;
}
export interface IOrganization {
  name: string | null;
  role: string | null;
  starts_at: Date | null;
  ends_at: Date | null;
  starts_at_str?: string | null;
  ends_at_str?: string | null;
  description: string | null;
}

export interface IProfile {
  _id: string;
  profileId?: string;
  experience: IProfileExperience[];
  education: IProfileEducation[];
  volunteering: ProfileVolunteeringExperience[];
  honoursAwards: ProfileHonorAward[];
  recommendations: ProfileRecommendations[];
  certifications: ProfileCertification[];
  organizations: IOrganization[];
  websites: IWebsite[];
  experience_hidden: iProfileExperienceHidden[];
  education_hidden: IProfileEducationHidden[];
  occupation: string | null;
  similar_profiles: string[];
  awards: string[] | null;
  avatar: string | null;
  full_name: string | null;
  about?: string | null;
  linkedin_id: string | null;
  languages: string[] | null;
  followers_count: number | null;
  address: string | null;
  country: string | null;
  bg_img?: string;
  hidden?: boolean;
  isEnriched?: boolean;
  isClaimed?: boolean;
  isComplete?: boolean;
  top_profile?: any;
}
export interface ProfileSnippetI {
  _id: string;
  url: string;
  full_name: string | null;
  location: string | null;
  country?: string | null;
  status?: string;
  isClaimed?: boolean;
  isTitle?: boolean;
  source?: string;
  priority?: number;
}
