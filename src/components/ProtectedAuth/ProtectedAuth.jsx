import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedAuth({ children }) {
  const token = useSelector((state) => state.user.token);
  if (token) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
}
