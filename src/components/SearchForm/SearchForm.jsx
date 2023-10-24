import React from "react";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <>
      <section className="search">
        <form className="search__form" id="search-form">
          <input
            className="search__input"
            id="search-input"
            type="text"
            placeholder="Фильм"
          ></input>
          <button className="search__btn" type="submit">
            Найти
          </button>
          <span className="search__border"></span>
          <div className="search__filter-checkbox">
            <input className="search__filter-checkbox-input" type="checkbox"></input>
            <span className="search__filter-checkbox-subtitle">Короткометражки</span>
          </div>
        </form>
        {/* <FilterCheckbox /> */}
      </section>
    </>
  );
}
