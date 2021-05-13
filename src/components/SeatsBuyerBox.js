import { useState } from "react";

export default function SeatsBuyerBox(props) {
    const { name, setName, cpf, setCpf } = props;

    return(
        <div className="seats-buyer-box">
            <h2>Nome do comprador:</h2>
            <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} />
            <h2>CPF do comprador:</h2>
            <input type="number" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf} />
        </div>
    );
}