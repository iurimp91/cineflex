import { useState } from "react";

export default function Seats(props) {
    const sessionSeats = props.seats;
    console.log(sessionSeats);
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        setIsSelected(true);
    }

    return(
        <>
            <li key={sessionSeats.id} onClick={selectSeat} className={isSelected ? "seat selected" : "seat"}>
                {sessionSeats.name}
            </li>
        </>
    );
}