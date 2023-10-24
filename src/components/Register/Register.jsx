import React from "react";
import "./Register.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

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
      .max(25, "Введите не более 25 символов"), //ключ email - это строка, эл/адрес, обязательное поле(не пустое), минималье кол-во и максимальное кол-во символов - эти методы взяты из библиотеки Yup
    password: Yup.string("Введите корректный пароль")
      .min(5, "Введите не менее 5 символов")
      .max(25, "Введите не более 25 символов")
      .required("Обязательное поле"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="register">
        <Link to="/" className="register__logo">
          <img src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="user-form">
                <label className="user-form__field">
                  Имя
                  <Field
                    className="user-form__input user-form__input_type_name"
                    id="input-userName"
                    name="name"
                    type="text"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error__message"
                  />
                </label>

                <label className="user-form__field">
                  E-mail
                  <Field
                    className="user-form__input user-form__input_type_email"
                    id="input-userEmail"
                    name="email"
                    type="email"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error__message"
                  />
                </label>

                <label className="user-form__field">
                  Пароль
                  <Field
                    className="user-form__input user-form__input_type_password"
                    id="input-password"
                    name="password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error__message"
                  />
                </label>
                <button className="user-form__button" type="submit">
                  Зарегестрироваться
                </button>
                <p className="user-form__subtitle">
                  Уже зарегистрированы?{" "}
                  <Link to="/signin" className="user-form__link">
                    Войти
                  </Link>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
