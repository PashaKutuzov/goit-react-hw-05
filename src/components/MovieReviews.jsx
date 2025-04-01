import { getMovieReviews } from "../search-api";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
export default function MovieReviews(){
    const {movieId} = useParams()
    
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
    async function getDetails() {
        try {
            if (!movieId) return;
           
            const data = await getMovieReviews(movieId)
            if (data && data.reviews) {
                setReviews(data.reviews);
            }
        } catch (error) {
            console.log(error);
          
        }
    }
    getDetails()
    }, [movieId])
    return(
        <div>
        {reviews.length > 0 ? (
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Відгуки відсутні</p>
        )}
    </div>
    )
}