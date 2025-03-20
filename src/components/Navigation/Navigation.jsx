import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";

const Navigation = ({ isOpen }) => {
  const { t } = useTranslation();

  return (
    <div className={`header-menu ${isOpen ? "open" : ""}`}>
      <ul className={`nav-header ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {t("navigation.home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {t("navigation.catalog")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {t("navigation.contacts")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
