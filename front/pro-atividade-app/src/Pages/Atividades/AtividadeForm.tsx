import {FormEvent, useEffect, useState} from "react";
import {IAtividade, Prioridade} from "../../model/atividade";
import {AtividadeFormProps} from "../../model/atividadesProps";

const atividadeInicial: IAtividade= {
    id: 0,
    titulo: "",
    prioridade: Prioridade.NaoDefinido,
    descricao: "",
};


const AtividadeForm: React.FC<AtividadeFormProps> = ({ atividadeSelecionada, atualizarAtividade, addAtividade, cancelarAtividade }: AtividadeFormProps) => {
    const [atividade, setAtividade] = useState<IAtividade>(atividadeAtual());

    useEffect(() => {
        if (atividadeSelecionada.id !== 0) {
            setAtividade(atividadeSelecionada);
        } else {
            setAtividade(atividadeInicial);
        }
    }, [atividadeSelecionada]);

    const handleValue = (e: any) => {
        const {name, value} = e.target;

        setAtividade({...atividade, [name]: value});
    };



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (atividadeSelecionada.id !== 0) {
            atualizarAtividade(atividade);
        } else {
            addAtividade(atividade);
        }
        setAtividade(atividadeInicial);
    };

    const handleCancelar = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        cancelarAtividade();
    };

    function atividadeAtual(): IAtividade {
        if (atividadeSelecionada.id !== 0) {
            return atividadeSelecionada;
        } else {
            return atividadeInicial;
        }
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
                        onChange={handleValue}
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
                        onChange={handleValue}
                        value={atividade.prioridade}
                    >
                        <option hidden defaultValue="NaoDefinido">Prioridade</option>
                        ¶
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
                        className="form-control border-secondary"
                        name="descricao"
                        onChange={handleValue}
                        value={atividade.descricao}
                    />
                    <hr className="mt-4"></hr>
                </div>
                <div className="justify-content-end align-content-end d-flex mt-1">
                    <div className="col-md-4 mt-0 d-flex justify-content-end">
                        <div className="d-flex gap-1">
                            {atividade.id === 0 ? (
                                <button
                                    style={{width: 100 + "%"}}
                                    className="btn btn-outline-success"
                                    type="submit"
                                >
                                    <i className="fas fa-plus me-1"></i>
                                    Atividade
                                </button>
                            ) : (
                                <>
                                    <button
                                        style={{width: 86 + "px"}}
                                        className="btn btn-outline-success"
                                        type="submit"
                                    >
                                        <i className="fas fa-floppy-disk me-1"></i>
                                        Salvar
                                    </button>
                                    <button
                                        style={{width: 105 + "px"}}
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

export default AtividadeForm;