export interface Size {
  range: number[];
  id: string;
}
export const sizes: Size[] = [
  { range: [1, 10], id: "B" },
  { range: [11, 50], id: "C" },
  { range: [51, 200], id: "D" },
  { range: [201, 500], id: "E" },
  { range: [501, 1000], id: "F" },
  { range: [1001, 5000], id: "G" },
  { range: [5001, 10000], id: "H" },
  { range: [10001], id: "I" },
];
export const LINKEDIN_COMPANY_BASE = "https://www.linkedin.com/company/";
export const LINKEDIN_JOB_BASE = "https://www.linkedin.com/jobs/view/";

export const sortOptions = [
  { name: "Company Size", value: "1" },
  { name: "Followers Count", value: "2" },
];
export const minFoundedYear = 1000;
export const maxFoundedYear = new Date().getFullYear();
