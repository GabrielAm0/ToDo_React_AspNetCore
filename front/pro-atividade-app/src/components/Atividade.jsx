import React from "react";

export default function Atividade(props) {
  function prioridadeLabel(prioridade) {
    switch (prioridade) {
      case "Baixa":
        return "Baixa";
      case "Normal":
        return "Média";
      case "Alta":
        return "Alta";
      default:
        return "Não definida";
    }
  }
  function prioridadeIcon(prioridade) {
    switch (prioridade) {
      case "Baixa":
        return "smile";
      case "Normal":
        return "meh";
      case "Alta":
        return "frown";
      default:
        return "Não definida";
    }
  }
  function prioridadeIconColor(prioridade) {
    switch (prioridade) {
      case "Baixa":
        return "carinha-green";
      case "Normal":
        return "carinha-yellow";
      case "Alta":
        return "carinha-red";
      default:
        return "carinha-black";
    }
  }
  function prioridadeBorderColor(prioridade) {
    switch (prioridade) {
      case "Baixa":
        return "borda-green";
      case "Normal":
        return "borda-yellow";
      case "Alta":
        return "borda-red";
      default:
        return "borda-black";
    }
  }
  return (
    <div
      className={
        "card mb-2 shadow " + prioridadeBorderColor(props.ativ.prioridade)
      }
    >
      <h5 className="card-header">Tarefa</h5>
      <div className="card-body">
        <div className="d-flex justify-content-between align-content-center">
          <h5 className="card-title">
            <span className="badge text-bg-secondary">{props.ativ.id}</span> -
            <span className="text-black ms-1">{props.ativ.titulo}</span>
          </h5>
          <h6 className="card-title">
            Prioridade:
            <span
              className={
                "ms-1  font-weight-bold " +
                prioridadeIconColor(props.ativ.prioridade)
              }
            >
              <i
                className={
                  "fa-regular me-1 fa-face-" +
                  prioridadeIcon(props.ativ.prioridade)
                }
              ></i>
              {prioridadeLabel(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <div className="d-flex align-items-baseline">
          <p className="ms-1 card-text">{props.ativ.descricao}</p>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-end" style={{ gap: "5px" }}>
          <button
            onClick={() => props.pegarAtividade(props.ativ.id)}
            className="btn btn-outline-primary m-0 btn-sm"
          >
            <i className="fas fa-pen me-1"></i>
            Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm "
            onClick={() => props.handleConfirmModal(props.ativ.id)}
          >
            <i className="fas fa-trash me-1"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
