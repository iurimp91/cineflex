import FooterText from "./FooterText";

export default function Footer(props) {

    return(
        <div className="footer">
            <div className="footer-image-box">
            <img src={props.order.posterURL} />
            </div>
            <FooterText order={props.order}>
                <h3>{props.order.title}</h3>
                <h3>{props.order.weekday} - {props.order.hour}</h3>
            </FooterText>
        </div>
    );
}