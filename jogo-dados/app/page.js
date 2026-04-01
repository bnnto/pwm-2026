"use client";

import styles from "./page.module.css";
import { useState } from 'react';
import JogoDados from "./components/JogoDados";

export default function Home() {
  const [jogador1, setJogador1] = useState({ nome: "Jogador 1", pontos: 0 });
  const [jogador2, setJogador2] = useState({ nome: "Jogador 2", pontos: 0 });

  const [rodada, setRodada] = useState({ rodada: 1, jogadorAtual: 0, pontos: [0, 0]});

  function rolarDado(jogador, setJogador){
    const valor = Math.floor(Math.random() * 6) + 1;

    setJogador({ ...jogador, dado: valor, pontos: jogador.pontos + valor });
  }
  
  setRodada(estadoAtual => ({
    ...estadoAtual,
    rodada: estadoAtual.rodada + 1,
    jogadorAtual: 1 - estadoAtual.jogadorAtual,
    pontos: jogadorAtual.pontos,
  }));

  const [p1, p2] = rodada.pontos;
  if(p1 > p2) return `${nome[0]} venceu!`;
  if(p1 < p2) return `${nome[1]} venceu!`;
  return "Empate!";

  return (
    <>
    <div>
      <h3>Rodada: {rodada.valor}</h3>
      <div>
      <JogoDados
        jogador={jogador1}
        onRolar={() => rolarDado(jogador1, setJogador1)}
      />
      </div>
      <div>
      <JogoDados
        jogador={jogador2}
        onRolar={() => rolarDado(jogador2, setJogador2)}
      />
      </div>
    </div>
    </>
  );
}
