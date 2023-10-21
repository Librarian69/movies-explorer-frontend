import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return window.innerWidth > 768 ? (
    <>
      <div className="navigation__btn-container navigation__btn-container_films">
        <Link to="/movies" className="navigation__btn navigation__btn_bold">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__btn">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="navigation__btn-container">
        <Link
          to="/profile"
          // onClick
          className="navigation__btn navigation__btn_account"
        >
          Аккаунт
        </Link>
      </div>
    </>
  ) : (
    <>
      {/* в Header.css 
        .header__btn-container_blok {изменить display: none; на display: block} */}
      <div className="navigation__overlay">
        <div className="navigation__container-wrapper"></div>
        <div className="navigation__list">
          <button className="navigation__close-button"></button>
          <nav className="navigation__link">
            <NavLink
              exact
              to="/"
              className="navigation__item"
              activeClassName="navigation__item_active"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="navigation__item"
              activeClassName="navigation__item_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="navigation__item"
              activeClassName="navigation__item_active"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link
            to="/profile"
            className="navigation__btn navigation__btn_account"
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </>
  );
}
