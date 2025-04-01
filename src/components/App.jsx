import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./Navigation";
// import HomePage from "../pages/HomePage";
// import MoviesPage from "../pages/MoviesPage";
// import NotFoundPage from "../pages/NotFoundPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
import MovieReviews from "./MovieReviews";
import MovieCast from "./MovieCast";


const HomePage = lazy(() => import ("../pages/HomePage"))
const MoviesPage = lazy(() => import ("../pages/MoviesPage"))
const MovieDetailsPage = lazy(() => import ("../pages/MovieDetailsPage"))
const NotFoundPage = lazy(() => import ("../pages/NotFoundPage"))



function App() {
 

  return (
   <div>
    <Navigation />
<Suspense fallback={'Loading page...'}>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movies" element={<MoviesPage/>}/>

      <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
      <Route path="cast" element={<MovieCast/>}/>
      <Route path="reviews" element={<MovieReviews/>}/>
      </Route>
      
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </Suspense>
   </div>
    
  );
}

export default App;
