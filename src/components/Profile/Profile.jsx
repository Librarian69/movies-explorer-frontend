import React, { useEffect, useState } from "react";
import "./Profile.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { editUserInfo, getUserInfo } from "../../utils/MainApi";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { setToken } from "../../redux/slices/userReducer";

export default function Profile() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo(token)
      .then((data) => {
        setUserInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //начальные значения для Formik
  const initialValues = {
    name: userInfo?.name || "",
    email: userInfo?.email || "",
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
      .max(25, "Введите не более 25 символов"), //ключ email - это строка, эл/адрес, обязательное поле(не пустое), минималье кол-во и максимальное кол-во символов - эти методы взяты из библиотеки Yup
  });

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (res) => {
        console.log(res);
        alert("Сохранено");
      },
      onError: (res) => {
        alert("Произошла ошибка. Попробуйте еще раз");
      },
    });
  };

  const { mutate } = useMutation({
    //useMutation - хук, который позволяет создать функцию отложенного вызова(срабатывают при клике, изменении, каком-то действии, главное не сразу)
    mutationFn: (values) => {
      editUserInfo(token, values);
    },
  });

  function logout() {
    dispatch(setToken(""));
  }

  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__title">
          Привет, {userInfo?.name || "Незнакомец"}!
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => {
            const { isValid, dirty } = formik;
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
                  <button
                    className="profile__edit"
                    type="submit"
                    disabled={!(dirty && isValid)}
                  >
                    Редактировать
                  </button>
                  <button
                    className="profile__logout"
                    type="button"
                    onClick={logout}
                  >
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
