import css from "../components/components-css/HomePage.module.css"
import { useState } from "react"
import { useEffect } from "react"

import { getPopularMovies } from "../search-api"
import MovieList from "../components/MovieList"
// import MovieList from "../components/MovieList"
export default function HomePage(){
    
const [movies, setMovies] = useState([])
const [loader, setLoader] = useState(false)
const [error, setError] = useState(null)


    useEffect(() => {
async function getMovies() {
    setLoader(true); 
            setError(null); 
    try {
        const data = await getPopularMovies()
        if (data && data.results) {
            setMovies(data.results); 
        }
    } catch (error) {
        console.log(error);
        
    }
    finally{
        setLoader(false);
    }
}
getMovies()
    },[])

    return(
        <div>
 <h1 className={css.title}>Trending today</h1>
 {loader && <p>Loading</p>}
            {error && <p style={{ color: "red" }}>Помилка: {error}</p>}

            {!loader && !error && <MovieList movies={movies} />}
        </div>
    )
}