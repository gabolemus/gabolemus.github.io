// This file contains the app's page routes.

import Home from "../components/pages/Home";
import Portfolio from "../components/pages/Home";
import WorkExperience from "../components/pages/WorkExperience";

/** Interface for the pages to be shown in the navbar */
export interface Page {
  /** Path of the page */
  path: string;
  /** Name of the page */
  name: string;
  /** Element to be rendered in the page */
  element: JSX.Element;
}

/**
 * Returns a page interface with the given parameters.
 * @param path Path of the page.
 * @param name Name of the page.
 * @param element Element to be rendered in the page.
 */
export const page = (path: string, name: string, element: JSX.Element) => {
  return { path, name, element };
};

/** Object that contains all the pages and those to be rendered in the navbar. */
export const pages = [
  page("/", "Home", <Home />),
  page("/work-experience", "Work Experience", <WorkExperience />),
  page("/portfolio", "Portfolio", <Portfolio />),
];
