export default function FooterText(props) {
    return(
        <>
            <div className="footer-text">
                {props.order.weekday === undefined ? props.children[0] : props.children}
            </div>
        </>
    );
}