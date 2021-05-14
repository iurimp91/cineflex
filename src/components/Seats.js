import { useState } from "react";

export default function Seats(props) {
    const sessionSeats = props.seats;
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        if(!sessionSeats.isAvailable) {
            alert("Esse assento não está disponível")
        } else if(!isSelected) {
            setIsSelected(true);
            props.setChosenSeatsID([...props.chosenSeatsID, sessionSeats.id]);
            props.setChosenSeatsNumber([...props.chosenSeatsNumber, sessionSeats.name]);
        } else {
            setIsSelected(false);
            const i = props.chosenSeatsID.findIndex((id) => id === sessionSeats.id)
            props.chosenSeatsID.splice(i, 1);
            props.chosenSeatsNumber.splice(i, 1);
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