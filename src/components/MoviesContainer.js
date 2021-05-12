import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MoviesContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

        promise.then((response) => {
            setMovies(response.data);
        });
    }, []);

    return(
        <div className="movies-container">
            <h1>Selecione o filme</h1>
            <ul>
                {movies.map((movie) =>
                    <Link to={`/sessions/${movie.id}`}>
                        <li key={movie.id}>
                            <img src={movie.posterURL} />
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    );
}