export enum Prioridade {
    NaoDefinido = 'NaoDefinido',
    Baixa = "Baixa",
    Media = "Normal",
    Alta = "Alta"
}

export interface IAtividade {
    id: number;
    prioridade: Prioridade;
    titulo: string;
    descricao: string;
}

