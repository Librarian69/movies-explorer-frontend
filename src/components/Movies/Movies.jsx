import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../utils/MoviesApi";
import { useWindowWidth } from "@react-hook/window-size";
import { setMoviesRedux } from "../../redux/slices/searchReducer";
import {
  NOTECOUNT,
  NOTEMAX,
  NOTEMINCOUNT,
  NOTEMINMAX,
  NOTEMINWIDTH,
  NOTEWIDTH,
  PHONEMAXCOUNT,
  PHONEMAXWIDTH,
  PHONEMINWIDTH,
  TABLEPHONEMAX,
  TABLETCOUNT,
  TABLETWIDTH,
} from "../../utils/constants";
import { getLikeMovies } from "../../utils/MainApi";

export default function Movies() {
  const [movies, setMovies] = useState(new Array(1));
  const moviesRedux = useSelector((state) => state.search.moviesRedux);
  const search = useSelector((state) => state.search.search);
  const [max, setMax] = useState(4);
  const [countFilms, setCountFilms] = useState(4);
  const [isBlocked, setIsBlocked] = useState(false);
  const width = useWindowWidth();
  const short = useSelector((state) => state.search.short);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const [likeMovies, setLikeMovies] = useState([]);
  const token = useSelector((state) => state.user.token);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (width > NOTEWIDTH) {
      setMax(NOTEMAX);
      setCountFilms(NOTECOUNT);
    } else if (width > NOTEMINWIDTH) {
      setMax(NOTEMINMAX);
      setCountFilms(NOTEMINCOUNT);
    } else if (width > TABLETWIDTH) {
      setMax(TABLEPHONEMAX);
      setCountFilms(TABLETCOUNT);
    } else if (width > PHONEMAXWIDTH) {
      setMax(TABLEPHONEMAX);
      setCountFilms(TABLETCOUNT);
    } else if (width >= PHONEMINWIDTH) {
      setMax(TABLEPHONEMAX);
      setCountFilms(PHONEMAXCOUNT);
    } else {
      setMax(TABLEPHONEMAX);
      setCountFilms(PHONEMAXCOUNT);
    }
  }, [width]);

  useEffect(() => {
    getMovies()
      .then((data) => {
        console.log(data);
        setErr(false);
        dispatch(setMoviesRedux(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function loadMore() {
    setCountFilms((prev) => prev + max);
  }

  useEffect(() => {
    if (countFilms >= movies.length) {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [countFilms, movies, max]);

  useEffect(() => {
    getLikeMovies(token)
      .then((data) => {
        // setIsLike(data.find((elem) => elem.movieId === movie.id));
        setLikeMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    if (search !== "") {
      setMovies(
        moviesRedux.filter((elem) => {
          if (short) {
            return (
              (elem.nameRU.toLowerCase().includes(search.toLowerCase()) &&
                elem.duration <= 40) ||
              (elem.nameEN.toLowerCase().includes(search.toLowerCase()) &&
                elem.duration <= 40)
            );
          } else {
            return (
              elem.nameRU.toLowerCase().includes(search.toLowerCase()) ||
              elem.nameEN.toLowerCase().includes(search.toLowerCase())
            );
          }
        })
      );
    }
  }, [search, countFilms, short]);

  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList
        err={err}
        loadMore={loadMore}
        isBlocked={isBlocked}
        movies={movies.slice(0, countFilms)}
        loading={loading}
        isSavedFilms={false}
        likeMovies={likeMovies}
      />
      <Footer />
    </>
  );
}
