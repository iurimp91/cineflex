import Footer from "./Footer";
import Session from "./Session";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react"; 

export default function SessionsContainer(props) {
    const [sessions, setSessions] = useState([]);
    const { idFilme } = useParams();
    const { order, setOrder } = props;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
        
        promise.then((response) => {
            setSessions(response.data);
            setOrder({title: response.data.title, posterURL: response.data.posterURL});
        });

        promise.catch((error) => {
            alert("Something went wrong. Please, reload the page.");
        })
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

            <Footer order={order} />
        </div>
    );
}