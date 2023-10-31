import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useDispatch, useSelector } from "react-redux";
import { setSaveSearch, setSearch } from "../../redux/slices/searchReducer";
import { useLocation } from "react-router-dom";

export default function SearchForm() {
  const search = useSelector((state) => state.search.search);
  const saveSearch = useSelector((state) => state.search.saveSearch);
  const [value, setValue] = useState(search);
  const location = useLocation();
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();
    if (location.pathname === "/movies") {
      if (value !== "") {
        dispatch(setSearch(value));
      } else {
        alert("Нужно ввести ключевое слово");
      }
    } else {
      dispatch(setSaveSearch(value));
    }
  }
  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setValue("");
    }
  }, []);

  return (
    <>
      <section className="search">
        <form className="search__form" id="search-form" onSubmit={handleClick}>
          <input
            className="search__input"
            id="search-input"
            type="text"
            placeholder="Фильм"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></input>
          <button className="search__btn" type="submit">
            Найти
          </button>
          <span className="search__border"></span>
          <FilterCheckbox />
        </form>
      </section>
    </>
  );
}
