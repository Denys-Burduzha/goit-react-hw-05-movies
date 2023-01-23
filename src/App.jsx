import {Navigate, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Reviews from './pages/Reviews/Reviews';
import Cast from './pages/Cast/Cast';
import MoviesPage from  './pages/MoviesPage/MoviesPage'




const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App
