import Footer from "./Footer";
import SeatsBuyerBox from "./SeatsBuyerBox";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seats from "./Seats";

export default function SeatsContainer(props) {
    const [seats, setSeats] = useState([]);
    const { idSessao } = useParams();
    const { order, setOrder } = props;

    const [buyers, setBuyers] = useState([]);
    const [name, setName] = useState([]);
    const [cpf, setCpf] = useState([]);
    const [chosenSeatsID, setChosenSeatsID] = useState([]);
    const [chosenSeatsNumber, setChosenSeatsNumber] =useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            setSeats(response.data);
            setOrder({...order, hour: response.data.name, weekday: response.data.day.weekday, date: response.data.day.date});
        });

        promise.catch((error) => {
            alert("Something went wrong. Please, reload the page.")
        })
    }, []);

    if(seats.length === 0) {
        return (
            <span>Carregando</span>
        );
    }

    let buyersArray = [];

    function makeBuyersArray() {
        buyers.forEach(buyer => buyersArray.push({idAssento: buyer.id, nome: buyer.name, cpf: buyer.cpf}));
    }

    function makeOrder() {
        makeBuyersArray(); 
        const orderData = { ids: chosenSeatsID, compradores: buyersArray }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', orderData)
        setOrder({...order, buyers});

        promise.then(response => {
            alert("Tickets bought! Enjoy your movie!")
        })

        promise.catch(error => {
            alert("Something went wrong. Please, try again.");
        })
    }

    return(
        <div className="seats-container">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className="seats-row">
                {seats.seats.map(seats => 
                    <Seats buyers={buyers} setBuyers={setBuyers} seats={seats} chosenSeatsID={chosenSeatsID} setChosenSeatsID={setChosenSeatsID} chosenSeatsNumber={chosenSeatsNumber} setChosenSeatsNumber={setChosenSeatsNumber} /> 
                )}
            </ul>
            <div className="seats-subtitle-box">
                <div className="seat-subtitle"><div className="seat selected"></div><span>Selecionado</span></div>
                <div className="seat-subtitle"><div className="seat"></div><span>Disponível</span></div>
                <div className="seat-subtitle"><div className="seat unavailable"></div><span>Indisponível</span></div>
            </div>
            <div className="seats-buyer-box">
                {chosenSeatsID.map((item, i) => { 
                    if(chosenSeatsID.length === 0) {
                        return <div></div>;
                    } else {
                        return <SeatsBuyerBox buyers={buyers} setBuyers={setBuyers} name={name} setName={setName} cpf={cpf} setCpf={setCpf} chosenSeatsNumber={chosenSeatsNumber[i]} />;
                    }
                })}
            </div>
            <Link to={`/successo`} >
                <button onClick={makeOrder}>Reservar assento(s)</button>
            </Link>
            <Footer order={order} />
        </div>
    );
}