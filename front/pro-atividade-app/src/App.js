import { useEffect, useState } from "react";
import "./App.css";
import { Button, Modal } from "react-bootstrap";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from "./api/atividade";

function App() {
  const [ShowAtividadeModal, setShowAtividadeModal] = useState(false);
  const [smConfirmModal, setSmConfirmModal] = useState(false);

  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  const handleAtividadeModal = () => {
    setShowAtividadeModal(!ShowAtividadeModal);
  };

  const handleConfirmModal = (id) => {
    if (id !== 0 && id !== undefined) {
      const atividade = atividades.filter((ativ) => ativ.id === id);
      setAtividade(atividade[0]);
    } else {
      setAtividade({ id: 0 });
    }
    setSmConfirmModal(!smConfirmModal);
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
    setAtividade({ id: 0 });
  };

  const addAtividade = async (ativ) => {
    handleAtividadeModal();
    setAtividade({ id: 0 });
    try {
      const response = await api.post("atividade", ativ);
      setAtividades([...atividades, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar atividade:", error);
    }
  };

  const deletarAtividade = async (id) => {
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

  const atualizarAtividade = async (ativ) => {
    handleAtividadeModal();
    const response = await api.put(`atividade/${ativ.id}`, ativ);
    const { id } = response.data;
    setAtividades(
      atividades.map((item) =>
        item.id === id ? response.data : item
      )
    );
    setAtividade({ id: 0 });
  };

  function cancelarAtividade() {
    handleAtividadeModal();
    setAtividade({ id: 0 });
  }

  function pegarAtividade(id) {
    handleAtividadeModal();
    const atividade = atividades.find((ativ) => ativ.id === id);
    setAtividade(atividade);
  }

  return (
    <>
      <div className="d-flex justify-content-between align-content-endmt-2 pb-3 border-bottom border-dark">
        <h1 className="p-0 m-0">Atividades</h1>
        <Button variant="success" size="lg" onClick={novaAtividade}>
          <i className="fas fa-plus me-1"></i> Adicionar
        </Button>
      </div>

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
            atividades={atividades}
            fecharModal={handleAtividadeModal}
          />
        </Modal.Body>
      </Modal>

      {/* Modal para deletar a atividade*/}

      <Modal size="md" show={smConfirmModal} onHide={handleConfirmModal}>
        <Modal.Header closeButton onHide={handleConfirmModal}>
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

export default App;
