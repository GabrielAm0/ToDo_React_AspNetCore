import React from 'react'
import {Button} from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import {useHistory, useParams} from "react-router-dom";

export default function ClienteForm() {

    const history = useHistory();
    
    let { id } = useParams();
    
    const voltarPag = () => {
        history.push("/clientes/lista");
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
