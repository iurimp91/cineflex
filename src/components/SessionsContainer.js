import Footer from "./Footer";
import Session from "./Session";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react"; 

export default function SessionsContainer() {
    const [sessions, setSessions] = useState([]);
    const { movieID } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieID}/showtimes`);
        
        promise.then((response) => {
            setSessions(response.data);
        });
    }, []);

    if(sessions.length === 0) {
        return (
            <span>Carregando</span>
        );
    }

    return(
        <div className="sessions-container">
            <h1>Selecione o horário</h1>
            <ul>
                <Session sessions={sessions} />
            </ul>

            <Footer />
        </div>
    );
}