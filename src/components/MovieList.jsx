import css from "./components-css/MovieList.module.css"
import { Link, useLocation } from "react-router-dom"

export default function MovieList({movies}){

const location = useLocation()
console.log(location);

return(
    <ul className={css.list}>
    {movies.map(movie => (
        <li className={css.listItem} key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
        </li>
    ))}
</ul>
)

}