import css from "../components/components-css/MoviesPage.module.css"
import { useSearchParams } from "react-router-dom"
import { searchMovies } from "../search-api"
import { useState, useEffect } from "react"
import MovieList from "../components/MovieList";

export default function MoviesPage(){

const [searchParams, setSearchParams] = useSearchParams()
const query = searchParams.get("query") || "";
const [searchResults, SetSearchResults] = useState([])
const [inputValue, setInputValue] = useState(query);

const [loader, setLoader] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
    if (!query) return; 
    async function getMovies() {
        setLoader(true); 
            setError(null); 
        try {
            const data = await searchMovies(query);
            if (data && data.results) {
                SetSearchResults(data.results);
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }
    getMovies();
}, [query]);
const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query: inputValue });
};
return(
    <div className={css.formContainer}>
        
         <form onSubmit={handleSubmit} className={css.form}>
                <input
                className={css.input}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter movie name..."
                />
                <button type="submit" className={css.submitBtn}>Search</button>
            </form>
            {loader && <p>Loading</p>}
        {error && <p style={{ color: "red" }}>Помилка: {error}</p>}
            {!loader && !error && <MovieList movies={searchResults} />}
        </div>
)
}