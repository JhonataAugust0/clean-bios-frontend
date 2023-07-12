import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import { Home, Login, Privacy, Register, Clients } from "../pages";
import { Schedules } from "pages/Schedules";
import { Schedulling } from "pages/Schedulling";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/schedulling" element={<Schedulling />} />
        <Route path="/*" element={<App />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
