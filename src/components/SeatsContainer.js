import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seats from "./Seats";

export default function SeatsContainer() {
    const [seats, setSeats] = useState([]);
    const { sessionID } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);

        promise.then((response) => {
            setSeats(response.data);
        });
        console.log(seats);
    }, []);

    if(seats.length === 0) {
        return (
            <span>Carregando</span>
        );
    }

    return(
        <div className="seats-container">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className="seats-row">
                {seats.seats.map(seats => 
                    <Seats seats={seats} /> 
                )}
            </ul>
            <div className="seats-subtitle-box">
                <div className="seat-subtitle"><div className="seat selected"></div><span>Selecionado</span></div>
                <div className="seat-subtitle"><div className="seat"></div><span>Disponível</span></div>
                <div className="seat-subtitle"><div className="seat unavailable"></div><span>Indisponível</span></div>
            </div>
            <div className="seats-buyer-box">
                <h2>Nome do comprador:</h2>
                <input type="text" placeholder="Digite seu nome..." />
                <h2>CPF do comprador:</h2>
                <input type="text" placeholder="Digite seu CPF..." />
            </div>
            <button>Reservar assento(s)</button>

            {/*<Footer />*/}
        </div>
    );
}