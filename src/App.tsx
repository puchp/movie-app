import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import MovieCatalogPage from "./pages/MovieCatalogPage";
import MovieDetailPage from "./pages/MovieDetailPage";

import TvCatalogPage from "./pages/TvCatalogPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Home</>} />
        <Route path="/movies" element={<MovieCatalogPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/tv-shows" element={<TvCatalogPage />} />
      </Route>
    </Routes>
  );
};

export default App;
