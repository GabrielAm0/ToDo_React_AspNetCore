import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TitlePage from '../../components/TitlePage';

const clientes = [
    {
        id: 1,
        nome: 'Microsoft',
        responsavel: 'Otto',
        telefone: '1234563789',
        situacao: 'Ativo'
    },
    {
        id: 2,
        nome: 'Amazon',
        responsavel: 'William',
        telefone: '6677889955',
        situacao: 'Desativado'
    },
    {
        id: 3,
        nome: 'Google',
        responsavel: 'Otto',
        telefone: '3355667788',
        situacao: 'Em Análise'
    },
    {
        id: 4,
        nome: 'Facebook',
        responsavel: 'Kein',
        telefone: '6789452319',
        situacao: 'Ativo'
    },
    {
        id: 5,
        nome: 'Twitter',
        responsavel: 'Jack',
        telefone: '9287654321',
        situacao: 'Ativo'
    }
]



const ClienteLista = () => {
    const navigate = useNavigate();
    const [termoBusca, setTermoBusca] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTermoBusca(e.target.value);
    };

    const clientesFiltrados = clientes.filter((cliente) => {
        return Object.values(cliente)
            .join(' ')
            .toLowerCase()
            .includes(termoBusca.toLowerCase());
    });

    const novoCliente = () => {
        navigate('/cliente/detalhe');
    };

    return (
        <>
            <TitlePage titulo="Clientes Lista">
                <Button size="lg" variant="outline-secondary" onClick={novoCliente}>
                    <i className="fas fa-plus me-1"></i>
                    Novo Cliente
                </Button>
            </TitlePage>

            <InputGroup className="mb-3 mt-3">
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl placeholder="Buscar" onChange={handleInputChange} />
            </InputGroup>
            <table className="table table-striped table-hover text-center align-middle">
                <thead className="table-dark mt-3">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Resposável</th>
                    <th scope="col">Contato</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Opções</th>
                </tr>
                </thead>
                <tbody>
                {clientesFiltrados.map((cliente) => (
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.responsavel}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.situacao}</td>
                        <td>
                            <div
                                className="d-flex gap-1 justify-content-center align-items-center"
                                style={{ padding: 0, margin: 0 }}
                            >
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() =>
                                        navigate(`/cliente/detalhe/${cliente.id}`)
                                    }
                                >
                                    <i className="fas fa-user-edit me-1"></i>
                                    Editar
                                </button>
                                <button className="btn btn-danger btn-sm">
                                    <i className="fas fa-user-times me-1"></i>
                                    Desativar
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default ClienteLista;