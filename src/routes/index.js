import { BrowserRouter, Routes, Route } from "react-router-dom";

import Background from "../components/Background";
import ContentTemplate from "../components/ContentTemplate";
import Home from "../pages/Home";
import FilmInfo from "../pages/FilmInfo";

function AppRoutes() {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentTemplate />} />
          <Route path="/filme/:id" element={<FilmInfo />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default AppRoutes;
