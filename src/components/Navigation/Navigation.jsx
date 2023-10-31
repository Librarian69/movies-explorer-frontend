import React from "react";
import "./Navigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navigation({ open, setOpen }) {
  const location = useLocation();
  const style = {
    display: open ? "flex" : "none",
  };
  const styleColor = {
    color: location.pathname === "/" ? "#fff" : "#000000",
  };
  const styleBack = {
    backgroundColor: location.pathname === "/" ? "#2BE080" : "none",
  };
  return window.innerWidth > 768 ? (
    <>
      {location.pathname === "/movies" ? (
        <div className="header__main-nav header__main-nav_films">
          <Link
            to="/movies"
            className="header__main-nav-btn header__main-nav-btn_bold "
          >
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__main-nav-btn">
            Сохраненные фильмы
          </Link>
        </div>
      ) : location.pathname === "/saved-movies" ? (
        <div className="header__main-nav header__main-nav_films">
          <Link to="/movies" className="header__main-nav-btn">
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="header__main-nav-btn header__main-nav-btn_bold"
          >
            Сохраненные фильмы
          </Link>
        </div>
      ) : (
        <div className="header__main-nav header__main-nav_films">
          <Link
            to="/movies"
            style={styleColor}
            className="header__main-nav-btn"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            style={styleColor}
            className="header__main-nav-btn"
          >
            Сохраненные фильмы
          </Link>
        </div>
      )}
      <div className="header__main-nav">
        <Link
          to="/profile"
          className="header__main-nav-btn header__main-nav-btn_account"
          style={styleBack}
        >
          Аккаунт
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="header__navigation-overlay" style={style}>
        <div className="header__navigation-container-wrapper"></div>
        <div className="header__navigation-list">
          <button
            className="header__navigation-close-button"
            onClick={() => setOpen(false)}
          ></button>
          <nav className="header__navigation-link">
            <NavLink
              exact
              to="/"
              className="header__navigation-item"
              activeClassName="header__navigation-item_active"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="header__navigation-item"
              activeClassName="header__navigation-item_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__navigation-item"
              activeClassName="header__navigation-item_active"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link
            to="/profile"
            className="header__main-nav-btn header__main-nav-btn_account"
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </>
  );
}
