import { Link } from "react-router-dom";

export default function PurchaseOrderContainer(props) {
    const { title, date, hour, buyers } = props.order;

    if(props.order === undefined) {
        return(
            <div>CARREGANDO</div>
        );
    }

    console.log(props);
    console.log(props.order);

    return(
        <div className="purchase-order-container">
            <h3>Pedido feito<br />com sucesso!</h3>
            <div className="purchase-order-info">
                <h4>Filme e sessão</h4>
                <h5>{title}</h5>
                <h5>{date} {hour}</h5>
            </div>
            <div className="purchase-order-info">
                <h4>Ingressos</h4>
                {buyers.map((buyer, i) => 
                    <h5 key={i} >Assento {buyer.number}</h5>
                )}
                </div>
            <div className="purchase-order-info">
                <h4>Compradores</h4>
                {buyers.map((buyer, i) =>
                    <div key={i}>
                        <h5>Nome: {buyer.name}</h5>
                        <h5>CPF: {buyer.cpf}</h5>
                    </div>
                )}
            </div>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </div>
    );
}