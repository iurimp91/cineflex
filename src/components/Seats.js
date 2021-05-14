import { useState } from "react";

export default function Seats(props) {
    const sessionSeats = props.seats;
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        if(!sessionSeats.isAvailable) {
            alert("Esse assento não está disponível")
        } else if(!isSelected) {
            setIsSelected(true);
            const newArray = [...props.chosenSeats, sessionSeats.id];
            props.setChosenSeats(newArray);
        } else {
            setIsSelected(false);
            const i = props.chosenSeats.findIndex((id) => id === sessionSeats.id)
            props.chosenSeats.splice(i, 1);
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