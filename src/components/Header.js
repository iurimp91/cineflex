import arrow from "../assets/arrow.png";
import { useHistory } from "react-router-dom";

export default function Header() {
    let history = useHistory();

    function goBack() {
        history.goBack();
    }

    return(
        <header>
            {history.location.pathname === "/" ? "" : <img src={arrow} onClick={goBack} />}
            <div>
                CINEFLEX
            </div>
        </header>
    );
}