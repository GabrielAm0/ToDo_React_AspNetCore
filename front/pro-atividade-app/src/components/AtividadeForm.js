import { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  descricao: "",
  prioridade: 0,
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0) {
      setAtividade(props.atividadeSelecionada);
    } else {
      setAtividade(atividadeInicial);
    }
  }, [props.atividadeSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) {
      return props.atividadeSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  function handleCancelar(e) {
    e.preventDefault();
    props.cancelarAtividade();
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (props.atividadeSelecionada.id !== 0) {
      props.atualizarAtividade(atividade);
    } else {
      props.addAtividade(atividade);
    }
    setAtividade(atividadeInicial);
  }

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            required
            id="titulo"
            type="text"
            className="form-control border-secondary"
            name="titulo"
            onChange={inputTextHandler}
            value={atividade.titulo}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            required
            className="form-select border-secondary"
            id="prioridade"
            name="prioridade"
            onChange={inputTextHandler}
            value={atividade.prioridade}
          >
            <option defaultValue="NaoDefinido">Prioridade</option>¶
            <option value="Baixa">Baixa</option>
            <option value="Normal">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            required
            id="descricao"
            type="text"
            className="form-control border-secondary"
            name="descricao"
            onChange={inputTextHandler}
            value={atividade.descricao}
            rows="4"
          />
          <hr className="mt-4"></hr>
        </div>
        <div className="justify-content-end align-content-end d-flex mt-1">
          <div className="col-md-4 mt-0 d-flex justify-content-end">
            <div className="d-flex gap-1">
              {atividade.id === 0 ? (
                <button
                  style={{ width: 100 + "%" }}
                  className="btn btn-outline-success"
                  type="submit"
                >
                  <i className="fas fa-plus me-1"></i>
                  Atividade
                </button>
              ) : (
                <>
                  <button
                    style={{ width: 86 + "px" }}
                    className="btn btn-outline-success"
                    type="submit"
                  >
                    <i className="fas fa-floppy-disk me-1"></i>
                    Salvar
                  </button>
                  <button
                    style={{ width: 105 + "px" }}
                    className="btn btn-outline-danger"
                    onClick={handleCancelar}
                  >
                    <i className="fas fa-xmark me-1"></i>
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
