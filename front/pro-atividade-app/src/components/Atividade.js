import React from "react";

export default function Atividade(props) {
  function prioridadeLabel(prioridade) {
    switch (prioridade) {
      case "1":
        return "Baixa";
      case "2":
        return "Média";
      case "3":
        return "Alta";
      default:
        return "Não definida";
    }
  }
  function prioridadeIcon(prioridade) {
    switch (prioridade) {
      case "1":
        return "smile";
      case "2":
        return "meh";
      case "3":
        return "frown";
      default:
        return "Não definida";
    }
  }
  function prioridadeIconColor(prioridade) {
    switch (prioridade) {
      case "1":
        return "carinha-green";
      case "2":
        return "carinha-yellow";
      case "3":
        return "carinha-red";
      default:
        return "carinha-black";
    }
  }
  function prioridadeBorderColor(prioridade) {
    switch (prioridade) {
      case "1":
        return "borda-green";
      case "2":
        return "borda-yellow";
      case "3":
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
            onClick={() => props.deletarAtividade(props.ativ.id)}
          >
            <i className="fas fa-trash me-1"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
