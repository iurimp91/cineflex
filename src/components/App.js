import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import MoviesContainer from "./MoviesContainer";
import SessionsContainer from "./SessionsContainer";
import SeatsContainer from "./SeatsContainer";
import PurchaseOrderContainer from "./PurchaseOrderContainer";

export default function App() {
    const [order, setOrder] = useState([]);

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <MoviesContainer />
                </Route>
                <Route exact path="/sessoes/:idFilme">
                    <SessionsContainer order={order} setOrder={setOrder} />
                </Route>
                <Route exact path="/assentos/:idSessao">
                    <SeatsContainer order={order} setOrder={setOrder} />
                </Route>
                <Route exact path="/successo">
                    <PurchaseOrderContainer order={order} setOrder={setOrder} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}