import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menu from "../../images/menu-button.svg";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLogged }) {
  // поменять состояние
  return (
    <>
      {!isLogged ? (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <div className="header__btn-container">
            <Link to="/signup" className="header__btn header__btn_white">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_signin">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header header__main" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <Navigation />
          <button className="header__btn header__btn_burger">
            <img src={menu} alt="Меню" />
          </button>
        </header>
      )} 
    </>
  );
}
