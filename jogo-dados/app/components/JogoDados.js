import styles from "../page.module.css";
import Dado from "./Dado";
import SpotlightCard from "./SpotlightCard";

export default function JogoDados({ jogador, onRolar, desabilitado, vezDele, rolando}) {
  return (
    <>
    <SpotlightCard className={`${styles.dado} ${vezDele ? styles.vezAtiva : ""}`} glowColor="#7c3aed">
      <h2>{jogador.nome}</h2>
      <p className={styles.vitorias}>Vitórias: <span>{jogador.vitorias}</span></p>
      <div className={`${styles.dados} ${rolando ? styles.dadoAnimado : ""}`}>
        <Dado valor={jogador.dados[0]} />
        <Dado valor={jogador.dados[1]} />
      </div>
      <p className={styles.soma}>Soma: {jogador.dados[0] + jogador.dados[1]}</p>
      <button onClick={onRolar} disabled={desabilitado}>Rolar dados</button>
    </SpotlightCard>
    </>
  );
}
