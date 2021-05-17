import { useState } from "react";

export default function SeatsBuyerBox(props) {
    const { chosenSeatsNumber, buyers, setBuyers } = props;
    const [unicName, setUnicName] = useState("");
    const [unicCpf, setUnicCpf] = useState("");

    function getName(e) {
        const i = buyers.findIndex((item) => item.number.includes(chosenSeatsNumber));
        setUnicName(e.target.value);
        let buyerName = e.target.value;
        setBuyers([...buyers], {...buyers[i].name = buyerName});
    }

    function getCpf(e) {
        const i = buyers.findIndex((item) => item.number.includes(chosenSeatsNumber));
        setUnicCpf(e.target.value);
        let buyerCpf = e.target.value;
        setBuyers([...buyers], {...buyers[i].cpf = buyerCpf});
    }

    return(
        <div className="seats-buyer-box">
            <h2>Assento {chosenSeatsNumber}</h2>
            <h3>Nome do comprador:</h3>
            <input type="text" placeholder="Digite seu nome..." onChange={getName} value={unicName} />
            <h3>CPF do comprador:</h3>
            <input type="number" placeholder="Digite seu CPF..." onChange={getCpf} value={unicCpf} />
        </div>
    );
}