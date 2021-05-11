import Footer from "./Footer"

export default function SessionsContainer() {
    return(
        <div className="sessions-container">
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

            <Footer />
        </div>
    );
}