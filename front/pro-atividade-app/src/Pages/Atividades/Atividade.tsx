import {useState, useEffect} from "react";
import {Button, Modal} from "react-bootstrap";
import AtividadeForm from "./AtividadeForm";
import AtividadeLista from "./AtividadeLista";
import api from "../../api/atividade";
import TitlePage from "../../components/TitlePage";
import {IAtividade, Prioridade} from "../../model/atividade";

const atividadeInicial: IAtividade = {
    id: 0,
    titulo: "",
    prioridade: Prioridade.NaoDefinido,
    descricao: "",
};

const Atividade = () => {
    const [ShowAtividadeModal, setShowAtividadeModal] = useState(false);
    const [smConfirmModal, setSmConfirmModal] = useState(false);

    const [atividades, setAtividades] = useState<IAtividade[]>([]);
    const [atividade, setAtividade] = useState<IAtividade>(atividadeInicial);

    const handleAtividadeModal = () => {
        setShowAtividadeModal(!ShowAtividadeModal);
    };

    const handleConfirmModal = (id: number) => {
        if (id !== 0 && id !== undefined) {
            const atividade = atividades.filter((ativ) => ativ.id === id);
            setAtividade(atividade[0]);
        } else {
            setAtividade(atividadeInicial);
        }
        setSmConfirmModal(!smConfirmModal);
    };

    const handleCloseConfirmModal = () => {
        handleConfirmModal(0);
    };

    const pegaTodasAtividade = async () => {
        const response = await api.get("atividade");
        return response.data;
    };

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await pegaTodasAtividade();
            if (todasAtividades) {
                setAtividades(todasAtividades);
            }
        };
        getAtividades();
    }, []);

    const novaAtividade = () => {
        handleAtividadeModal();
        setAtividade(atividadeInicial);
    };

    const addAtividade = async (ativ: IAtividade) => {
        handleAtividadeModal();
        setAtividade(atividadeInicial);
        try {
            const response = await api.post("atividade", ativ);
            setAtividades([...atividades, response.data]);
        } catch (error) {
            console.error("Erro ao adicionar atividade:", error);
        }
    };

    const deletarAtividade = async (id: number) => {
        handleConfirmModal(0);
        try {
            if (await api.delete(`atividade/${id}`)) {
                const atividadesFiltradas = atividades.filter((ativ) => ativ.id !== id);
                setAtividades(atividadesFiltradas);
            }
        } catch (error) {
            console.error("Erro ao deletar atividade:", error);
        }
    };

    const atualizarAtividade = async (ativ: IAtividade) => {
        handleAtividadeModal();
        const response = await api.put(`atividade/${ativ.id}`, ativ);
        const {id} = response.data;
        setAtividades(
            atividades.map((item) => item.id === id ? response.data : item)
        );
        setAtividade(atividadeInicial);
    };

    const cancelarAtividade = () => {
        setAtividade(atividadeInicial);
        handleAtividadeModal();
    };


    const pegarAtividade = (id: number) => {
        const atividade = atividades.filter((atividade) => atividade.id === id);
        setAtividade(atividade[0]);
        handleAtividadeModal();
    };


    return (
        <>

            <TitlePage
                titulo={"Atividades"}
            >
                <Button variant="success" size="lg" onClick={novaAtividade}>
                    <i className="fas fa-plus me-1"></i> Adicionar
                </Button>
            </TitlePage>

            <Modal show={ShowAtividadeModal} onHide={handleAtividadeModal}>
                <Modal.Header closeButton onHide={handleAtividadeModal}>
                    <Modal.Title>
                        {atividade.id !== 0 ? "Atividade " + atividade.id : "Atividade"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AtividadeForm
                        addAtividade={addAtividade}
                        atividadeSelecionada={atividade}
                        atualizarAtividade={atualizarAtividade}
                        cancelarAtividade={cancelarAtividade}
                    />
                </Modal.Body>
            </Modal>

            {/* Modal para deletar a atividade*/}

            <Modal show={smConfirmModal} onHide={handleCloseConfirmModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Excluir{" "}
                        {atividade.id !== 0 ? "Atividade " + atividade.id : "Atividade"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja <b>EXCLUIR A ATIVIDADE {atividade.id}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-success"
                        onClick={() => deletarAtividade(atividade.id)}
                    >
                        <i className="fas fa-check me-1"></i>
                        Sim
                    </Button>
                    <Button variant="danger" onClick={() => handleConfirmModal(0)}>
                        <i
                            className="fas fa-times me-1
            "
                        ></i>
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>

            <AtividadeLista
                atividades={atividades}
                pegarAtividade={pegarAtividade}
                handleConfirmModal={handleConfirmModal}
            />
        </>
    );
}

export default Atividade;