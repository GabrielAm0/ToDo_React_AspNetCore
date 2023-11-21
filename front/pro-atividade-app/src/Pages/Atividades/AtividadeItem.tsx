import React from "react";
import {AtividadeItemProps} from "../../model/atividadesProps";
import {Prioridade} from "../../model/atividade";


const AtividadeItem: React.FC<AtividadeItemProps> = ({ativ, pegarAtividade, handleConfirmModal}: AtividadeItemProps) => {
    function prioridadeLabel(prioridade: string) {
        switch (prioridade) {
            case Prioridade.Baixa:
                return "Baixa";
            case Prioridade.Media:
                return "Média";
            case Prioridade.Alta:
                return "Alta";
            default:
                return "Não definida";
        }
    }

    function prioridadeIcon(prioridade: string) {
        switch (prioridade) {
            case Prioridade.Baixa:
                return "smile";
            case Prioridade.Media:
                return "meh";
            case Prioridade.Alta:
                return "frown";
            default:
                return "Não definida";
        }
    }

    function prioridadeIconColor(prioridade: string) {
        switch (prioridade) {
            case Prioridade.Baixa:
                return "carinha-green";
            case Prioridade.Media:
                return "carinha-yellow";
            case Prioridade.Alta:
                return "carinha-red";
            default:
                return "carinha-black";
        }
    }

    function prioridadeBorderColor(prioridade: string) {
        switch (prioridade) {
            case Prioridade.Baixa:
                return "borda-green";
            case Prioridade.Media:
                return "borda-yellow";
            case Prioridade.Alta:
                return "borda-red";
            default:
                return "borda-black";
        }
    }

    return (
        <div className={ "card mb-2 shadow " + prioridadeBorderColor(ativ.prioridade)}>
            <h5 className="card-header">Tarefa</h5>
            <div className="card-body">
                <div className="d-flex justify-content-between align-content-center">
                    <h5 className="card-title">
                        <span className="badge text-bg-secondary">{ativ.id}</span> -
                        <span className="text-black ms-1">{ativ.titulo}</span>
                    </h5>
                    <h6 className="card-title">
                        Prioridade:
                        <span className={"ms-1  font-weight-bold " + prioridadeIconColor(ativ.prioridade)}>
                            <i className={"fa-regular me-1 fa-face-" + prioridadeIcon(ativ.prioridade)}></i>
                            {prioridadeLabel(ativ.prioridade)}
                        </span>
                    </h6>
                </div>
                <div className="d-flex align-items-baseline">
                    <p className="ms-1 card-text">{ativ.descricao}</p>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-end" style={{gap: "5px"}}>
                    <button onClick={() => pegarAtividade(ativ.id)}
                            className="btn btn-outline-primary m-0 btn-sm">
                        <i className="fas fa-pen me-1"></i>
                        Editar
                    </button>
                    <button className="btn btn-outline-danger btn-sm "
                            onClick={() => handleConfirmModal(ativ.id)}>
                        <i className="fas fa-trash me-1"></i>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AtividadeItem;