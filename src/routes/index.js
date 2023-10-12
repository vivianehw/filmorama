import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FilmInfo from "../pages/FilmInfo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<FilmInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
