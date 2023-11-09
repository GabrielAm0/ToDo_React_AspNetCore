import Atividade from "./Atividade";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((ativ) => (
        <Atividade
          key={ativ.id}
          ativ={ativ}
          handleConfirmModal={props.handleConfirmModal}
          pegarAtividade={props.pegarAtividade}
        />
      ))}
    </div>
  );
}
