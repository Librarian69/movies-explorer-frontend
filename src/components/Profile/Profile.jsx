import React from "react";
import "./Profile.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Header from "../Header/Header";

export default function Profile() {
  //начальные значения для Formik
  const initialValues = {
    name: "",
    email: "",
  };

  //нужно для валидации формы
  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле")
      .min(2, "Введите не менее 2 символов")
      .max(20, "Введите не более 20 символов"),
    email: Yup.string("Введите корректный email")
      .email("Введите корректный email")
      .required("Обязательное поле")
      .min(5, "Введите не менее 5 символов")
      .max(25, "Введите не более 25 символов"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="profile__form">
                <label className="profile__field profile__field_border">
                  Имя
                  <Field
                    className="profile__input"
                    id="input-userName"
                    name="name"
                    type="text"
                    autoComplete="off"
                  />
                </label>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="profile__error"
                />

                <label className="profile__field">
                  E-mail
                  <Field
                    className="profile__input"
                    id="input-userEmail"
                    name="email"
                    type="email"
                    autoComplete="off"
                  />
                </label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="profile__error"
                />
                <div className="profile__btn">
                  <button className="profile__edit" type="submit">
                    Редактировать
                  </button>
                  <button className="profile__logout" type="button">
                    Выйти из аккаунта
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
