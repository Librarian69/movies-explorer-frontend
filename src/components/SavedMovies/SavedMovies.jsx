import React, { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getLikeMovies } from "../../utils/MainApi";
import { setSaveSearch, setSaveShort } from "../../redux/slices/searchReducer";

export default function SavedMovies() {
  const token = useSelector((state) => state.user.token);
  const saveShort = useSelector((state) => state.search.saveShort);
  const saveSearch = useSelector((state) => state.search.saveSearch);
  const [likedMovies, setLikedMovies] = useState([]);
  const dispatch = useDispatch();

  function updateLikeMovies() {
    getLikeMovies(token)
      .then((data) => {
        setLikedMovies(
          data.filter((elem) => {
            if (saveShort) {
              return (
                (elem.nameRU.toLowerCase().includes(saveSearch.toLowerCase()) &&
                  elem.duration <= 40) ||
                (elem.nameEN.toLowerCase().includes(saveSearch.toLowerCase()) &&
                  elem.duration <= 40)
              );
            } else {
              return (
                elem.nameRU.toLowerCase().includes(saveSearch.toLowerCase()) ||
                elem.nameEN.toLowerCase().includes(saveSearch.toLowerCase())
              );
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    updateLikeMovies();
  }, [token, saveSearch, saveShort]);

  useEffect(() => {
    dispatch(setSaveSearch(""));
    dispatch(setSaveShort(false));
  }, []);

  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={likedMovies}
        isBlocked={true}
        onUpdate={updateLikeMovies}
        isSavedFilms={true}
        likeMovies={likedMovies}
      />
      <Footer />
    </>
  );
}
