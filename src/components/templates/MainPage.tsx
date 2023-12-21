import React from "react";
import Footer from "../molecules/Footer/Footer";
import Navbar from "../organisms/Navbar/Navbar";

/** Props for MainPage component */
export interface MainPageProps {
  /** Children to render */
  children: React.ReactNode;
}

/** Template for the main page */
const MainPage = ({ children }: MainPageProps) => {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default MainPage;
