import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";


export default function Navigation({open, setOpen}) {

  const style = {
    display: open ? 'flex' : 'none'
  }

  return window.innerWidth > 768 ? (
    <>
      <div className="header__main-nav header__main-nav_films">
        <Link to="/movies" className="header__main-nav-btn header__main-nav-btn_bold">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__main-nav-btn">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="header__main-nav">
        <Link
          to="/profile"
          // onClick
          className="header__main-nav-btn header__main-nav-btn_account"
        >
          Аккаунт
        </Link>
      </div>
    </>
  ) : (
    <>
      {/* в Header.css 
        .header__btn-container_blok {изменить display: none; на display: block} */}
      <div className="header__navigation-overlay" style={style}>
        <div className="header__navigation-container-wrapper"></div>
        <div className="header__navigation-list">
          <button className="header__navigation-close-button" type="button" onClick={() => setOpen(false)}></button>
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
