import { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import "./App.css";

function App() {
    const [index, setIndex] = useState(0);
    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({id:0});

    useEffect(() => {
        atividades.lenght <= 0 ? setIndex(1) : 
        setIndex(Math.max(0, ...atividades.map((item) => item.id)) + 1)
    },[atividades])

    function addAtividade(ativ) {
        //Cria um array e adiciona os elementos dentro do outro elemento
        setAtividades([...atividades, { ...ativ, id: index}]);
    }

    function cancelarAtividade(){
        setAtividade({id: 0});
    }

    function atualizarAtividade(ativ) {
        setAtividades(
            atividades.map((item) => (item.id === atividade.id ? ativ : item))
        );
        setAtividade({ id: 0 });
    }

    function deletarAtividade(id) {
        const atividadeFiltradas = atividades.filter((atividade) => atividade.id !== id);
        setAtividades([...atividadeFiltradas]);
    }

    function pegarAtividade(id) {
        const atividade = atividades.filter((atividade) => atividade.id === id);
        setAtividade(atividade[0]);
    }



    return (
        <>
            <AtividadeForm
                addAtividade={addAtividade}
                atualizarAtividade={atualizarAtividade}
                cancelarAtividade ={cancelarAtividade}
                ativSelecionada={atividade}
                atividades={atividades}
            />

            <AtividadeLista
                atividades={atividades}
                deletarAtividade={deletarAtividade}
                pegarAtividade={pegarAtividade}
            />
        </>
    );
}

export default App;
