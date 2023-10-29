import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { dislikeMovie, getLikeMovies, likeMovie } from "../../utils/MainApi";
import { useSelector } from "react-redux";

export default function MoviesCard({ movie, onUpdate }) {
  const location = useLocation();
  const token = useSelector((state) => state.user.token);
  const [isLike, setIsLike] = useState(false);
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч. " + minutes + "м.";
  }
  useEffect(() => {
    getLikeMovies(token)
      .then((data) => {
        setIsLike(data.find((elem) => elem.movieId === movie.id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  function handleClick(e) {
    if (isLike) {
      dislikeMovie(movie.id, token);
      setIsLike(false);
    } else {
      likeMovie(
        {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        },
        token
      )
        .then(() => {
          setIsLike(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      {location.pathname === "/movies" ? (
        <>
          <li className="movies-card">
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
              <img
                className="movies-card__cover"
                src={` https://api.nomoreparties.co${movie.image.url}`}
                alt="Фото фильма"
              />
            </a>
            <div className="movies-card__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">{movie.nameRU}</h5>
                <button
                  type="button"
                  className={`movies-card__favorite-btn ${
                    isLike ? "movies-card__favorite-btn_active" : ""
                  }`}
                  onClick={(e) => handleClick(e)}
                ></button>
              </div>
              <p className="movies-card__duration">
                {getTimeFromMins(movie.duration)}
              </p>
            </div>
          </li>
        </>
      ) : (
        <>
          <li className="movies-card">
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
              <img
                className="movies-card__cover"
                src={movie.image}
                alt="Фото фильма"
              />
            </a>

            <div className="movies-card__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">{movie.nameRU}</h5>
                <button
                  type="button"
                  className="movies-card__delete-btn"
                  onClick={(e) => {
                    dislikeMovie(movie.movieId, token)
                      .then(() => {
                        onUpdate();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                ></button>
              </div>
              <p className="movies-card__duration">
                {" "}
                {getTimeFromMins(movie.duration)}
              </p>
            </div>
          </li>
        </>
      )}
    </>
  );
}
