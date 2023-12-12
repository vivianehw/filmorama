/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Background from "../components/Background";
import ContentTemplate from "../components/ContentTemplate";
import Home from "../pages/Home";
import FilmList from "../pages/FilmList";
import FilmInfo from "../pages/FilmInfo";
import LoadingGif from "../utils/loadingGif";
import api from "./api";

function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);
  const [randomFilmData, setRandomFilmData] = useState([]);
  const [randomYear, setRandomYear] = useState(null);
  const language = "en-US";
  const emptyYears = [
    1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1875, 1876, 1877, 1879,
    1880, 1881, 1883, 1884, 1886,
  ];

  const randomYearGenerator = () => {
    const min = 1865;
    const max = new Date().getFullYear();
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;

    if (emptyYears.includes(rand)) {
      setRandomYear(1994);
    } else {
      setRandomYear(rand);
    }
  };

  useEffect(() => {
    if (randomYear === null) {
      randomYearGenerator();
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(
        `discover/movie?include_adult=false&language=${language}&page=1&primary_release_year=${randomYear}&sort_by=popularity.desc`
      )
      .then((response) => {
        setRandomFilmData(response.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [randomYear]);

  if (isLoading) {
    return (
      <div style={{ height: "100vh" }}>
        <LoadingGif />
      </div>
    );
  } else {
    return (
      <Background>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ContentTemplate
                  page={<Home filmData={randomFilmData} year={randomYear} />}
                  year={randomYear}
                />
              }
            />
            <Route
              path="/:year/film_list"
              element={
                <ContentTemplate
                  page={
                    <FilmList
                      filmData={randomFilmData}
                      year={randomYear}
                      language={language}
                    />
                  }
                  year={randomYear}
                />
              }
            />
            <Route path="/filme/:id" element={<FilmInfo />} />
          </Routes>
        </BrowserRouter>
      </Background>
    );
  }
}

export default AppRoutes;
