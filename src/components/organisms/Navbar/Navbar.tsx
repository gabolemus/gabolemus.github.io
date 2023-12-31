import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { pages } from "../../../utils/pages";
import { isMobileScreen } from "../../../utils/utils";
import "./Navbar.scss";

/** The navbar component */
const Navbar = () => {
  const [showLinks, setShowLinks] = useState<boolean>(!isMobileScreen());
  const [linksClass, setLinksClass] = useState<string>("navbar__links visible");
  const currURL = window.location.hash;

  const { t } = useTranslation();
  const navbarLoc = t("navbar", { returnObjects: true }) as {
    name: string;
    link: string;
  }[];

  /**
   * Gets the class string for the links
   * @param {boolean} isMobile - Whether the screen is mobile or not
   * @returns {string} - The class string for the links
   */
  const getLinksClass = (isMobile: boolean): string => {
    let linksClassStr = "navbar__links";
    linksClassStr += !isMobile ? " visible" : " hidden";
    linksClassStr += isMobileScreen() ? " mobile" : "";
    return linksClassStr;
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = isMobileScreen();
      setLinksClass(getLinksClass(isMobile));
      setShowLinks(!isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /** Toggles the mobile links class */
  const toggleMobileLinksClass = () => {
    setShowLinks(!showLinks);
    setLinksClass(getLinksClass(showLinks));
  };

  return (
    <>
      <nav className={`navbar${isMobileScreen() ? " mobile" : ""}`}>
        <div className="navbar__container">
          <div className="navbar__title">
            <a href="#/">gabolemus.is-a.dev</a>
          </div>
          {isMobileScreen() && (
            <div className="navbar__menu-icon" onClick={toggleMobileLinksClass}>
              &#9776;
            </div>
          )}
        </div>
        <div className={linksClass}>
          {pages.map((page, idx) => (
            <a
              href={`#${page.path}`}
              key={page.name}
              className={currURL === `#${page.path}` ? "active" : ""}
            >
              {navbarLoc[idx].name}
            </a>
          ))}
        </div>
      </nav>
      <div className="navbar__spacer" />
    </>
  );
};

export default Navbar;
