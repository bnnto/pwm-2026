import Dado from "./Dado";

export default function JogoDados({ jogador, onRolar }) {
  return (
    <>
    <div>
      <h2>{jogador.nome} - {jogador.pontos} pontos</h2>
      <Dado valor={jogador.dado}/>
      <button onClick={onRolar}>Rolar</button>
    </div>
    </>
  );
}
