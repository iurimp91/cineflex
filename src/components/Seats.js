import SeatsContainer from "./SeatsContainer";
import { useState } from "react";

export default function Seats(props) {
    const { seats, chosenSeatsID, setChosenSeatsID, chosenSeatsNumber, setChosenSeatsNumber, buyers, setBuyers } = props;
    const [isSelected, setIsSelected] = useState(false);

    function selectSeat() {
        if(!seats.isAvailable) {
            alert("Esse assento não está disponível")
        } else if(!isSelected) {
            setIsSelected(true);
            setChosenSeatsID([...chosenSeatsID, seats.id]);
            setChosenSeatsNumber([...chosenSeatsNumber, seats.name]);
            setBuyers([...buyers, {id: seats.id, number: seats.name}]);
        } else {
            if(window.confirm("Tem certeza que quer desmarcar esse assento?")) {
                setIsSelected(false);
                const i = chosenSeatsID.findIndex((id) => id === seats.id)
                const arrayID = chosenSeatsID.filter((item, j) => j !== i);
                const arrayNumber = chosenSeatsNumber.filter((item, j) => j !== i);
                const arrayBuyers = buyers.filter((item, j) => j !== i);
                setChosenSeatsID([...arrayID]);
                setChosenSeatsNumber([...arrayNumber]);
                setBuyers([...arrayBuyers]);
            }
        }
    }

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