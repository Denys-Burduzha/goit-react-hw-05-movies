import { Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Reviews from './pages/Reviews/Reviews';
import Cast from './pages/Cast/Cast';
import MoviesPage from  './pages/MoviesPage/MoviesPage'

import NotFound from './Components/NotFound/NotFound';


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App
