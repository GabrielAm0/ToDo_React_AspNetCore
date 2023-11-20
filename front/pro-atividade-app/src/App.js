import "./App.css";
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route, Link} from "react-router-dom";
import ClienteLista from "./pages/clientes/ClienteLista";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteForm from "./pages/clientes/ClienteForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {

    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/atividades/lista" component={Atividade}/>
            <Route path="/clientes/lista" component={ClienteLista}/>
            <Route path="/cliente/detalhe/:id?" component={ClienteForm}/>
            <Route component={PageNotFound}/> 
        </Switch>
    );
}
