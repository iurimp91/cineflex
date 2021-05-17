import { Link } from "react-router-dom";

export default function Session(props) {
    const sessionsDays = props.sessions.days;
    
    return (
        <>
            {sessionsDays.map((session) => 
                <li key={session.id}>
                    <h2>{session.weekday} - {session.date}</h2>
                    <div className="sessions">
                        {session.showtimes.map((item) =>
                            <Link key={item.id} to={`/assentos/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div key={item.id} className="session"><span>{item.name}</span></div>    
                            </Link>
                        )}
                    </div>
                </li>
            )}
        </>
    );
}