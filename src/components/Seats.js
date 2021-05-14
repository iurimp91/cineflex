import SeatsContainer from "./SeatsContainer";
import { useState } from "react";

export default function Seats(props) {
    const { seats, chosenSeatsID, setChosenSeatsID, chosenSeatsNumber, setChosenSeatsNumber } = props;
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        if(!seats.isAvailable) {
            alert("Esse assento não está disponível")
        } else if(!isSelected) {
            setIsSelected(true);
            setChosenSeatsID([...chosenSeatsID, seats.id]);
            setChosenSeatsNumber([...chosenSeatsNumber, seats.name]);
        } else {
            setIsSelected(false);
            if(chosenSeatsID.length === 1) {
                setChosenSeatsID([])
                setChosenSeatsNumber([])
            } else {
                const i = chosenSeatsID.findIndex((id) => id === seats.id)
                const arrayID = chosenSeatsID.filter((item, j) => j !== i);
                const arrayNumber = chosenSeatsNumber.filter((item, j) => j !== i);
                setChosenSeatsID([...arrayID]);
                setChosenSeatsNumber([...arrayNumber]);
            }
        }
    }

    console.log(isSelected)

    let seatClass = "";
    function selectClass() {
        if(!seats.isAvailable) {
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
            <li key={seats.id} onClick={selectSeat} className={seatClass}>
                {seats.name}
            </li>
        </>
    );
}