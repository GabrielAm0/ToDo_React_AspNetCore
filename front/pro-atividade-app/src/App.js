import { useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

function App() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: atividades.length + 1 }]);
  }
  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter((ativ) => ativ.id !== id);

    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((ativ) => ativ.id === id);
    setAtividade(atividade[0]);
  }

  function atualizarAtividade(ativ) {
    setAtividades(
      atividades.map((item) => (item.id === ativ.id ? ativ : item))
    );

    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });
  }
  return (
    <>
      <div className="caixa-form shadow m-0">
        <AtividadeForm
          addAtividade={addAtividade}
          atividadeSelecionada={atividade}
          atualizarAtividade={atualizarAtividade}
          cancelarAtividade={cancelarAtividade}
          atividades={atividades}
        />
      </div>
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
