import { useState } from "react";

export default function SeatsBuyerBox(props) {
    const { name, setName, cpf, setCpf, chosenSeatsNumber } = props;

    console.log(chosenSeatsNumber);

    return(
        <div className="seats-buyer-box">
            <h2>Assento {chosenSeatsNumber}</h2>
            <h3>Nome do comprador:</h3>
            <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} />
            <h3>CPF do comprador:</h3>
            <input type="number" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf} />
        </div>
    );
}