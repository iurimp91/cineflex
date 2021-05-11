import ReactDOM from "react-dom";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import SessionsContainer from "./components/SessionsContainer";
import SeatsContainer from "./components/SeatsContainer";
import PurchaseOrderContainer from "./components/PurchaseOrderContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <MoviesContainer />
                </Route>
                <Route exact path="/sessions">
                    <SessionsContainer />
                </Route>
                <Route exact path="/seats">
                    <SeatsContainer />
                </Route>
                <Route exact path="/success">
                    <PurchaseOrderContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));