import React from "react";
import "./MoviesCard.css";
import film1 from "../../images/pic__COLOR_pic-1.png";
import film2 from "../../images/pic__COLOR_pic-2.png";
import film3 from "../../images/pic__COLOR_pic-3.png";
import film4 from "../../images/pic__COLOR_pic-4.png";
import film5 from "../../images/pic__COLOR_pic-5.png";
import film6 from "../../images/pic__COLOR_pic-6.png";
import film7 from "../../images/pic__COLOR_pic-7.png";
import film8 from "../../images/pic__COLOR_pic-8.png";
import film9 from "../../images/pic__COLOR_pic-9.png";
import film10 from "../../images/pic__COLOR_pic-10.png";
import film11 from "../../images/pic__COLOR_pic-11.png";
import film12 from "../../images/pic__COLOR_pic-12.png";
import film13 from "../../images/pic__COLOR_pic-13.png";
import film14 from "../../images/pic__COLOR_pic-14.png";
import film15 from "../../images/pic__COLOR_pic-15.png";
import film16 from "../../images/pic__COLOR_pic-16.png";
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/movies" ? (
        <>
          <li className="movies-card">
            <img className="movies-card__cover" src={film1} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">33 слова о дизайне</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn movies-card__favorite-btn_active"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film2} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Киноальманах «100 лет дизайна»</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film3} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">В погоне за Бенкси</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film4} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Баския: Взрыв реальности</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film5} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Бег это свобода</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn movies-card__favorite-btn_active"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film6} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Книготорговцы</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn movies-card__favorite-btn_active"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film7} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Когда я думаю о Германии ночью</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film8} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Gimme Danger: История Игги и The Stooges</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film9} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Дженис: Маленькая девочка грустит</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn movies-card__favorite-btn_active"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film10} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Соберись перед прыжком</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film11} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Пи Джей Харви: A dog called money</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film12} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">По волнам: Искусство звука в кино</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film13} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Рудбой</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film14} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Скейт — кухня</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film15} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Война искусств</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film16} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">Зона</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__favorite-btn movies-card__favorite-btn_active"
              ></button>
            </div>
          </li>
        </>
      ) : (
        <>
          <li className="movies-card">
            <img className="movies-card__cover" src={film1} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">33 слова о дизайне</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__delete-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film2} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">33 слова о дизайне</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className="movies-card__delete-btn"
              ></button>
            </div>
          </li>
          <li className="movies-card">
            <img className="movies-card__cover" src={film3} />
            <div className="movies-card__cover__container">
              <div className="movies-card__desc">
                <h5 className="movies-card__title">33 слова о дизайне</h5>
                <p className="movies-card__duration">1ч42м</p>
              </div>
              <button
                type="button"
                className=" movies-card__delete-btn"
              ></button>
            </div>
          </li>
        </>
      )}
    </>
  );
}
