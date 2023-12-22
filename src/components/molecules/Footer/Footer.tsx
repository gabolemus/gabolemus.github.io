import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../../utils/Localization/i18n";
import "./Footer.scss";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const languages = t("languages", { returnObjects: true }) as string[];

  return (
    <footer className="footer">
      <p className="footer__text">
        © 2023 <span className="footer__name">Gabriel Lemus</span>
      </p>
      <div className="footer__language">
        <FontAwesomeIcon
          className="footer__language__select--icon"
          icon={faLanguage}
        />
        <select
          className="footer__language__select"
          value={language}
          onChange={(event) => {
            i18n.changeLanguage(event.target.value);
          }}
        >
          {availableLanguages.map((availableLanguage, idx) => (
            <option
              key={availableLanguage.code}
              value={availableLanguage.code}
              className="footer__language__select__option"
            >
              {languages[idx] as string}
            </option>
          ))}
        </select>
        {availableLanguages.map((availableLanguage) =>
          availableLanguage.code === language ? (
            availableLanguage.icon
          ) : (
            // A div is used to pass a key to it, preventing the missing key warning
            <div key={-1}></div>
          ),
        )}
      </div>
    </footer>
  );
};

export default Footer;
