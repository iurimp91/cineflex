export default function Session(props) {
    const sessionsDays = props.sessions.days;
    console.log(sessionsDays);
    
    return (
        <>
            {sessionsDays.map((session) => 
                <li key={session.id}>
                    <h2>{session.weekday} - {session.date}</h2>
                    <div className="sessions">
                        {session.showtimes.map((item) =>
                            <div key={item.id} className="session">{item.name}</div>    
                        )}
                    </div>
                </li>
            )}
        </>
    );
}