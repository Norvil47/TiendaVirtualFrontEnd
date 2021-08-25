import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import OrdenesPage from "./pages/OrdenesPage";
import PagarPage from "./pages/PagarPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-10">
        <div className="card">
          <div className="card-body">
           
            <Router>
            <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/Pagar">Ir a Pagar</Link>                 
                </li>               
                <li> <Link to="/OrdenesPage">Ordenes</Link></li>
              </ul>
              
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Pagar" component={PagarPage} />
                <Route exact path="/OrdenesPage" component={OrdenesPage} />
              
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
