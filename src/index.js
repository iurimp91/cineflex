import ReactDOM from "react-dom";

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
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));