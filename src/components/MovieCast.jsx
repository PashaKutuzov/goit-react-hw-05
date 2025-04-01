import { getMovieCredits } from "../search-api";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

export default function MovieCast(){
    const {movieId} = useParams()

const [cast, setCast] = useState([]);

useEffect(() => {
async function getDetails() {
    try {
        if (!movieId) return;
       
        const data = await getMovieCredits(movieId)
        if (data && data.cast) {
            setCast(data.cast);
        }
    } catch (error) {
        console.log(error);
      
    }
}
getDetails()
}, [movieId])


    return(
        <ul>
          {cast.map(actor => (
                <li key={actor.id}>
                    {actor.profile_path ? (
                        <img 
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                            alt={actor.name} 
                            width="100"
                        />
                    ) : (
                        <p>Фото відсутнє</p>
                    )}
                    <p><strong>{actor.name}</strong></p>
                    <p>Роль: {actor.character}</p>
                </li>
            ))}
        </ul>
    )
}