import Footer from "./Footer"

const assentos =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

export default function SeatsContainer() {
    return(
        <div className="seats-container">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className="seats-row">
                {assentos.map((assento) => <li className="seat">{assento}</li>)}
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

            <Footer />
        </div>
    );
}