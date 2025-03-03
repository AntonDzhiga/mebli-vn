import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
        {i18n.language === "ru" ? i18n.language.toLowerCase() : i18n.language.toUpperCase()}
      </div>
      {isOpen && (
        <div className="dropdown">
          {i18n.language !== "ua" && <button onClick={() => changeLanguage("ua")}>UA</button>}
          {i18n.language !== "en" && <button onClick={() => changeLanguage("en")}>EN</button>}
          {i18n.language !== "ru" && <button onClick={() => changeLanguage("ru")}>ru</button>}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
