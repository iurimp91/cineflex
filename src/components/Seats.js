import { useState } from "react";

export default function Seats(props) {
    const sessionSeats = props.seats;
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        if(!sessionSeats.isAvailable) {
            alert("Esse assento não está disponível")
        } else {
            isSelected ? setIsSelected(false) : setIsSelected(true);
        }
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
            <li key={sessionSeats.id} onClick={selectSeat} className={seatClass}>
                {sessionSeats.name}
            </li>
        </>
    );
}