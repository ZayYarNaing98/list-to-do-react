import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Hello from "../pages/Hello";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </>
  );
};

export default Router;
