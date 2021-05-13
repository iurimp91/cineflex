import Footer from "./Footer";
import SeatsBuyerBox from "./SeatsBuyerBox";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seats from "./Seats";

export default function SeatsContainer() {
    const [seats, setSeats] = useState([]);
    const { sessionID } = useParams();

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);

        promise.then((response) => {
            setSeats(response.data);
        });
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
                <SeatsBuyerBox name={name} setName={setName} cpf={cpf} setCpf={setCpf} />
            </div>
            <button>Reservar assento(s)</button>

            {/*<Footer />*/}
        </div>
    );
}