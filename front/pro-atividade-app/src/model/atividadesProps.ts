import { IAtividade } from "./atividade";

export interface AtividadeListaProps {
    atividades: IAtividade[],
    handleConfirmModal: (ativ: number) => void,
    pegarAtividade: (id: number) => void
}
export interface AtividadeItemProps {
    ativ: IAtividade;
    pegarAtividade: (id: number) => void;
    handleConfirmModal: (id: number) => void;
}

export interface AtividadeFormProps {
    addAtividade: (atividade: IAtividade) => void;
    atualizarAtividade: (atividade: IAtividade) => void;
    cancelarAtividade: () => void;
    atividadeSelecionada: IAtividade;
}
