import Atividade from "./Atividade";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((ativ) => (
        <Atividade
          key={ativ.id}
          deletarAtividade={props.deletarAtividade}
          pegarAtividade={props.pegarAtividade}
          ativ={ativ}
        />
      ))}
    </div>
  );
}
