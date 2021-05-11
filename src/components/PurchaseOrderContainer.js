export default function PurchaseOrderContainer() {
    return(
        <div className="purchase-order-container">
            <h3>Pedido feito<br />com sucesso!</h3>
            <div className="purchase-order-info">
                <h4>Filme e sessão</h4>
                <h5>Enola Holmes</h5>
                <h5>24/06/2021 15:00</h5>
            </div>
            <div className="purchase-order-info">
                <h4>Ingressos</h4>
                <h5>Assento 15</h5>
                <h5>Assento 16</h5>
            </div>
            <div className="purchase-order-info">
                <h4>Comprador</h4>
                <h5>Nome: Iuri da Silva Sauro</h5>
                <h5>CPF: 123-456-789-10</h5>
            </div>
            <button>Voltar para Home</button>
        </div>
    );
}