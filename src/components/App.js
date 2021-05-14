import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import MoviesContainer from "./MoviesContainer";
import SessionsContainer from "./SessionsContainer";
import SeatsContainer from "./SeatsContainer";
import PurchaseOrderContainer from "./PurchaseOrderContainer";

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <MoviesContainer />
                </Route>
                <Route exact path="/sessions/:movieID">
                    <SessionsContainer />
                </Route>
                <Route exact path="/seats/:sessionID">
                    <SeatsContainer />
                </Route>
                <Route exact path="/success">
                    <PurchaseOrderContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}