import AtividadeItem from "./AtividadeItem";
import {AtividadeListaProps} from "../../model/atividadesProps";
const AtividadeLista: React.FC<AtividadeListaProps> = ({
    atividades,
    handleConfirmModal,
    pegarAtividade
    } : AtividadeListaProps)  => {
    return (
        <div className="mt-3">
            {atividades.map((ativ) => (
                <AtividadeItem
                    key={ativ.id}
                    ativ={ativ}
                    handleConfirmModal={handleConfirmModal}
                    pegarAtividade={pegarAtividade}
                />
            ))}
        </div>
    );
};

export default AtividadeLista;