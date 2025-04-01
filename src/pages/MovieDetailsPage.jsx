import css from "../components/components-css/MovieDetailsPage.module.css"
import { Suspense, useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../search-api";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";

export default function MovieDetailsPage() {


const {movieId} = useParams()
const [details, setDetails] = useState([])

const [loader, setLoader] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
async function getDetails() {
  setLoader(true); 
            setError(null); 
    try {
        if (!movieId) return;
       
        const data = await getMovieDetails(movieId)
        if (data) {
            setDetails(data);
        }
    } catch (error) {
        console.log(error);
      
    }
    finally{
      setLoader(false);
  }
}
getDetails()
}, [movieId])


const location = useLocation()
const backLinkref = useRef(location.state)


  return (
<div className={css.container}>
{loader && <p>Loading</p>}
{error && <p style={{ color: "red" }}>Помилка: {error}</p>}
  {!loader && !error && <div>

<Link to={backLinkref.current} className={css.buttonBack}>Go back</Link>
<div className={css.infoContainer}>
      <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} width={300}/>
      <ul>

        <li>
          <h2>{details.title}</h2>
          <p>Оцінка користувача: {Math.round(details.vote_average * 10)}%</p>
        </li>

        <li>
          <h3>Overviev</h3>
          <p>{details.overview || "Опис відсутній"}</p>
        </li>

        <li>
          <h3>Genres</h3>
          <p>{details.genres?.map(genre => genre.name).join(", ") || "Жанри не знайдені"}</p>
        </li>

      </ul>
      </div>
<div>
      <p className={css.additionalInfo}>Additional informarion</p>
      <ul>
        <li><NavLink to="cast" className={css.link}>Cast</NavLink></li>
        <li><NavLink to="reviews" className={css.link}>Reviews</NavLink></li>
      
      </ul>
      <Suspense fallback={'Loading page...'}>
      <Outlet/>
      </Suspense>
</div>
    </div>}
    </div>
  );
}
