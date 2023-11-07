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

    setAtividade(atividadeInicial);
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
      <h1>{atividade.id !== 0 ? "Atividade " + atividade.id : "Atividades"}</h1>
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
            <option defaultValue="0">Prioridade</option>¶
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
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
          />
          <hr className="mt-4"></hr>
        </div>
        <div className="justify-content-center align-content-center d-flex mt-1">
          <div className="col-md-4 mt-0">
            <div className="d-flex gap-1">
              {atividade.id === 0 ? (
                <button
                  style={{ width: 100 + "%" }}
                  className="btn btn-outline-secondary"
                  type="submit"
                >
                  <i className="fas fa-plus me-1"></i>
                  Atividade
                </button>
              ) : (
                <>
                  <button
                    style={{ width: 100 + "%" }}
                    className="btn btn-outline-success"
                    type="submit"
                  >
                    <i className="fas fa-floppy-disk me-1"></i>
                    Salvar
                  </button>
                  <button
                    style={{ width: 100 + "%" }}
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
