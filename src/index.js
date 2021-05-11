import ReactDOM from "react-dom";

const assentos =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

function App () {
    return (
        <>
            <header>
                CINEFLEX
            </header>

            <div className="movies-container escondido">
                <h1>Selecione o filme</h1>
                <ul>
                    <li>
                        <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </li>
                    <li>
                        <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </li>
                    <li>
                        <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </li>
                    <li>
                        <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </li>
                    <li>
                        <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </li>
                    <li>
                        <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </li>
                </ul>
            </div>

            <div className="sessions-container escondido">
                <h1>Selecione o horário</h1>
                <ul>
                    <li>
                        <h2>Quinta-feira - 24/06/2021</h2>
                        <div className="sessions">
                            <div className="session">15:00</div>
                            <div className="session">19:00</div>
                        </div>
                    </li>
                    <li>
                        <h2>Sexta-feira - 25/06/2021</h2>
                        <div className="sessions">
                            <div className="session">15:00</div>
                            <div className="session">17:00</div>
                            <div className="session">19:00</div>
                            <div className="session">21:00</div>
                        </div>
                    </li>
                </ul>
                <div className="footer">
                    <div className="footer-image-box">
                    <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </div>
                    <div className="footer-text">
                        <h3>Enola Holmes</h3>
                        <h3>Quinta-feira - 15:00</h3>
                    </div>
                </div>
            </div>

            <div className="seats-container escondido">
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
                <div className="footer">
                    <div className="footer-image-box">
                    <img src="https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG" />
                    </div>
                    <div className="footer-text">
                        <h3>Enola Holmes</h3>
                        <h3>Quinta-feira - 15:00</h3>
                    </div>
                </div>
            </div>

            <div className="purchase-order-container">
                <h3>Pedido feito<br />com sucesso!</h3>
                <div className="purchase-order-info">
                    <h4>Filme e sessão</h4>
                    <h5>Enola Holmes</h5>
                    <h5>24/06/2021 15:00</h5>
                </div>
                <div className="purchase-order-info">
                    <h4>Ingressos</h4>
                    <h5>Assento 15</h5>
                    <h5>Assento 16</h5>
                </div>
                <div className="purchase-order-info">
                    <h4>Comprador</h4>
                    <h5>Nome: Iuri da Silva Sauro</h5>
                    <h5>CPF: 123-456-789-10</h5>
                </div>
                <button>Voltar para Home</button>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));