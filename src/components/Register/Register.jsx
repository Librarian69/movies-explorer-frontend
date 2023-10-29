import React from "react";
import "./Register.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useMutation } from "@tanstack/react-query";
import { handleLogin, handleReg } from "../../utils/MainApi";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/userReducer";

export default function Register() {
  const validMail =
    /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .required("Обязательное поле")
      .min(2, "Введите не менее 2 символов")
      .max(20, "Введите не более 20 символов"),
    email: Yup.string("Введите корректный email")
      .matches(validMail, "Введите корректный email")
      .min(5, "Введите не менее 5 символов")
      .max(25, "Введите не более 25 символов"),
    password: Yup.string("Введите корректный пароль")
      .min(5, "Введите не менее 5 символов")
      .max(25, "Введите не более 25 символов")
      .required("Обязательное поле"),
  });

  const onSubmit = (values) => {
    handleRegister(values, {
      onSuccess: (res) => {
        console.log(res);
        handleLogin({ email: values.email, password: values.password })
          .then((res) => {
            dispatch(setToken(res.token));
            navigate("/movies");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      onError: (res) => {
        alert("Произошла ошибка. Попробуйте еще раз");
      },
    });
  };

  const { mutate: handleRegister } = useMutation({
    mutationFn: handleReg,
  });

  return (
    <>
      <div className="register">
        <Link to="/" className="register__logo">
          <img src={logo} alt="Логотип сайта" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            const { isValid, dirty } = formik;
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
                <button
                  className="user-form__button"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
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
