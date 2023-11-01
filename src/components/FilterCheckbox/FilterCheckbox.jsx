import React from "react";
import "./FilterCheckbox.css";
import { useDispatch, useSelector } from "react-redux";
import { setSaveShort, setShort } from "../../redux/slices/searchReducer";
import { useLocation } from "react-router-dom";

export default function FilterCheckbox() {
  const short = useSelector((state) => state.search.short);
  const saveShort = useSelector((state) => state.search.saveShort);
  const dispatch = useDispatch();
  const location = useLocation();

  function handleSelect() {
    if (location.pathname === "/movies") {
      dispatch(setShort(short ? false : true));
    } else {
      dispatch(setSaveShort(saveShort ? false : true));
    }
  }
  return (
    <div className="search__filter-checkbox">
      <input
        className="search__filter-checkbox-input"
        type="checkbox"
        onChange={handleSelect}
        checked={location.pathname === "/movies" ? short : saveShort}
      ></input>
      <span className="search__filter-checkbox-subtitle">Короткометражки</span>
    </div>
  );
}
