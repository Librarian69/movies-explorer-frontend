import React from "react";
import "./Login.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
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
      <div className="login">
        <Link to="/" className="login__logo">
          <img src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="user-form">
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
                  Войти
                </button>
                <p className="user-form__subtitle">
                  Ещё не зарегистрированы?{" "}
                  <Link to="/signup" className="user-form__link">
                    Регистрация
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
