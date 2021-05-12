export default function Seats(props) {
    const sessionSeats = props.seats.seats;
    console.log(props);
    console.log(sessionSeats);
    
    return(
        <>
            {sessionSeats.map((item) => 
                <li key={item.id} className={item.isAvailable ? "seat" : "seat unavailable"}>
                    {item.name}
                </li>
            )}
        </>
    );
}