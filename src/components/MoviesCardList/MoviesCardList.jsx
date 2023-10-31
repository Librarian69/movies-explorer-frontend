import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";

export default function MoviesCardList({
  likeMovies,
  loadMore,
  movies,
  isBlocked,
  err,
  loading,
  onUpdate,
  isSavedFilms,
}) {
  const preloader = [...new Array(4)].map(() => <Preloader />);

  if (movies.length === 0) {
    return <SearchError errorText={"Ничего не найдено"} />;
  }
  if (err) {
    return (
      <SearchError
        errorText={
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        }
      />
    );
  }
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__container">
        {loading
          ? preloader
          : movies.map((elem) => {
              return (
                <MoviesCard
                  likeMovies={likeMovies}
                  movie={elem}
                  onUpdate={onUpdate}
                  key={isSavedFilms ? elem._id : elem.id}
                  isSavedFilms={isSavedFilms}
                />
              );
            })}
      </ul>
      {!isBlocked && (
        <button onClick={loadMore} className="movies-card-list__btn">
          Ещё
        </button>
      )}
    </div>
  );
}
