import Footer from "./Footer";
import SeatsBuyerBox from "./SeatsBuyerBox";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seats from "./Seats";

export default function SeatsContainer(props) {
    const [seats, setSeats] = useState([]);
    const { sessionID } = useParams();
    const { order, setOrder } = props;

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [chosenSeatsID, setChosenSeatsID] = useState([]);
    const [chosenSeatsNumber, setChosenSeatsNumber] =useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);

        promise.then((response) => {
            setSeats(response.data);
            setOrder({...order, hour: response.data.name, weekday: response.data.day.weekday, date: response.data.day.date});
        });
    }, []);

    if(seats.length === 0) {
        return (
            <span>Carregando</span>
        );
    }

    function makeOrder() {
        const orderData = { ids: chosenSeatsID, name: name, cpf: cpf }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', orderData)
        setOrder({...order, name: name, cpf: cpf, seats: chosenSeatsNumber})
    }

    return(
        <div className="seats-container">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className="seats-row">
                {seats.seats.map(seats => 
                    <Seats seats={seats} chosenSeatsID={chosenSeatsID} setChosenSeatsID={setChosenSeatsID} chosenSeatsNumber={chosenSeatsNumber} setChosenSeatsNumber={setChosenSeatsNumber} /> 
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
            <Link to={`/success`} >
                <button onClick={makeOrder}>Reservar assento(s)</button>
            </Link>
            <Footer order={order} />
        </div>
    );
}