import React from 'react'
import {Button} from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import {useNavigate, useParams} from "react-router-dom";

const ClienteForm: React.FC = () =>{

    const navigate = useNavigate();
    
    let { id } = useParams();
    
    const voltarPag = () => {
        navigate("/clientes/lista");
    }
    
    return (
        <TitlePage titulo={"Detalhes Cliente " + (id !== undefined ? id : '')}  >
            <Button size="lg" variant={"outline-secondary"} onClick={voltarPag}>
                <i className='fas fa-arrow-left me-1'></i>
                Voltar
            </Button>
        </TitlePage>    
    )
}

export default  ClienteForm;