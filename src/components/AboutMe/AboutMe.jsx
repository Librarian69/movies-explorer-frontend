import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/pic.png";

export default function AboutMe() {
  return (
    <>
      <section className="about-me">
        <h2 className="about-me__main-title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__description">
            <div className="about-me__personal-info">
              <h3 className="about-me__title">Виталий</h3>
              <p className="about-me__details">Фронтенд-разработчик, 29 лет</p>
              <p className="about-me__responsibilities">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a
              href="https://github.com/Librarian69"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img src={photo} alt="Фото" className="about-me__photo" />
        </div>
      </section>
      <Portfolio />
    </>
  );
}
