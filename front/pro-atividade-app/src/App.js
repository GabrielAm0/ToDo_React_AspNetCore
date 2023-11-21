import "./App.css";
import Atividade from "./pages/atividades/Atividade";
import { Routes, Route} from "react-router-dom";
import ClienteLista from "./pages/clientes/ClienteLista";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteForm from "./pages/clientes/ClienteForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/atividades/lista" element={<Atividade/>}/>
            <Route path="/clientes/lista" element={<ClienteLista/>}/>
            <Route path="/cliente/detalhe" element={<ClienteForm/>}/>
            <Route path="/cliente/detalhe/:id" element={<ClienteForm/>}/>
            <Route element={<PageNotFound/>}/> 
        </Routes>
    );
}
