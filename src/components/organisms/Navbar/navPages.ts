/** Interface for the navbar pages */
export interface NavPage {
  /** The name of the page */
  name: string;
  /** The path of the page */
  path: string;
}

export const navPages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Work Experience",
    path: "/work-experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];
