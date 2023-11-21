import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cast, Reviews, SharedLayout } from './index';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};
