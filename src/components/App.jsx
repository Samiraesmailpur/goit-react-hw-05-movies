import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout /SharedLayout';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() =>
  import('../pages/Home/Home').then(module => {
    return {
      ...module,
      default: module.Home,
    };
  })
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => {
    return {
      ...module,
      default: module.Movies,
    };
  })
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => {
    return {
      ...module,
      default: module.MovieDetails,
    };
  })
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => {
    return {
      ...module,
      default: module.Cast,
    };
  })
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => {
    return {
      ...module,
      default: module.Reviews,
    };
  })
);

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
