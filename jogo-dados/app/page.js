"use client";

import styles from "./page.module.css";
import { use, useState } from 'react';
import JogoDados from "./components/JogoDados";
import confetti from 'canvas-confetti';

export default function Home() {
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [nomes, setNomes] = useState({ jogador1: "", jogador2: "" });
  const [jogador1, setJogador1] = useState({ nome: "Jogador 1", vitorias: 0, dados: [1, 1] }); 
  const [jogador2, setJogador2] = useState({ nome: "Jogador 2", vitorias: 0, dados: [1, 1] });
  const [rodada, setRodada] = useState(1);
  const [jogadorAtual, setJogadorAtual] = useState(0);
  const [resultadoAtual, setResultadoAtual] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [rolando, setRolando] = useState(null);

  function iniciarJogo() {
    setJogador1({ nome: nomes.jogador1 || "Jogador 1", vitorias: 0, dados: [1, 1] });
    setJogador2({ nome: nomes.jogador2 || "Jogador 2", vitorias: 0, dados: [1, 1] });
    setJogoIniciado(true);
  }

  function rolarDado(jogador, setJogador, numeroJogador){
    const valor1 = Math.floor(Math.random() * 6) + 1;
    const valor2 = Math.floor(Math.random() * 6) + 1;

    setRolando(numeroJogador);
    setTimeout(() => setRolando(null), 400);

    setJogador({ ...jogador, dados: [valor1, valor2]});
    if(jogadorAtual === 0){
      setJogadorAtual(1);
    } else{
      const proximaRodada = rodada + 1;
      setJogadorAtual(0);
      setRodada(proximaRodada);
      
      if (proximaRodada > 5) {
        setMostrarModal(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#7c3aed', '#a78bfa', '#fbbf24', '#fff'],
        });
      }

      if((valor1 + valor2) > (jogador1.dados[0] + jogador1.dados[1])){
        setJogador2(j => ({ ...j, vitorias: j.vitorias + 1 }));
        setResultadoAtual(`${jogador2.nome} venceu!`);
      }else if ((valor1 + valor2) < (jogador1.dados[0] + jogador1.dados[1])){
        setJogador1(j => ({ ...j, vitorias: j.vitorias + 1 }));
        setResultadoAtual(`${jogador1.nome} venceu!`);
      }else{  
        setResultadoAtual("Empate!");
      }
    }
  }

  function resultado(){
    if(rodada > 5){
      if(jogador1.vitorias > jogador2.vitorias) return `${jogador1.nome} venceu!`;
      if(jogador1.vitorias < jogador2.vitorias) return `${jogador2.nome} venceu!`;
      return "Empate!";
    }
  }

  function resetarJogo() {
    setJogador1({ nome: "Jogador 1", vitorias: 0, dados: [1, 1] });
    setJogador2({ nome: "Jogador 2", vitorias: 0, dados: [1, 1] });
    setRodada(1);
    setJogadorAtual(0);
    setResultadoAtual("");
    setMostrarModal(false);
    setJogoIniciado(false);
    setNomes({ jogador1: "", jogador2: "" });
  }

  if (!jogoIniciado) {
    return (
      <div className={styles.pageCentro}>
        <div className={styles.modal}>
          <h2>Jogo de Dados</h2>
          <input
            className={styles.input}
            placeholder="Nome do Jogador 1"
            value={nomes.jogador1}
            onChange={e => setNomes({ ...nomes, jogador1: e.target.value })}
          />
          <input
            className={styles.input}
            placeholder="Nome do Jogador 2"
            value={nomes.jogador2}
            onChange={e => setNomes({ ...nomes, jogador2: e.target.value })}
          />
          <button onClick={iniciarJogo}>Começar</button>
        </div>
        <footer className={styles.footer}>2026, Bento Guilherme</footer>
      </div>
    );
  }

  return (
    <>
    <div className={styles.page}>
      <h3 className={styles.rodada}>Rodada: {rodada > 5 ? 5 : rodada}</h3>
      <p className={styles.resulAt}>{resultadoAtual}</p>
      <div className={styles.jogadores}>  
      <JogoDados
        jogador={jogador1}
        onRolar={() => rolarDado(jogador1, setJogador1, 1)}
        desabilitado={jogadorAtual !== 0 || rodada > 5}
        vezDele={jogadorAtual === 0}
        rolando={rolando === 1}
      />
      <JogoDados
        jogador={jogador2}
        onRolar={() => rolarDado(jogador2, setJogador2, 2)}
        desabilitado={jogadorAtual !== 1 || rodada > 5}
        vezDele={jogadorAtual === 1}
        rolando={rolando === 2}
      />
      </div>

      {mostrarModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span>{resultado() === "Empate!" ? "🤝" : "🏆"}</span>
            <h2>{resultado()}</h2>
            <button onClick={resetarJogo}>Jogar novamente</button>
          </div>
        </div>
      )}

      <footer className={styles.footer}>2026, Bento Guilherme</footer>
    </div>
    </>
  );
}
