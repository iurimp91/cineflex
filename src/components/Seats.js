import { useState } from "react";

export default function Seats(props) {
    const sessionSeats = props.seats;
    console.log(sessionSeats);
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        isSelected ? setIsSelected(false) : setIsSelected(true);
    }

    let seatClass = "";
    function selectClass() {
        if(!sessionSeats.isAvailable) {
            seatClass = "seat unavailable";
        } else if(isSelected) {
            seatClass = "seat selected"
        } else {
            seatClass = "seat";
        }
    }

    selectClass();

    return(
        <>
            <li key={sessionSeats.id} onClick={sessionSeats.isAvailable && selectSeat} className={seatClass}>
                {sessionSeats.name}
            </li>
        </>
    );
}