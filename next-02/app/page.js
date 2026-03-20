"use client";

//import styles from "./page.module.css";
import { useState } from "react"
import { MyButton2 as MeuBotao2 } from "./components/MyButton2";
import MyPanelButtons from "./components/MyPanelButtons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/myTodoList">Lista de Tarefas</Link>
      <h1 className="titulo">Welcome to my app</h1>
      <hr />
      <MeuBotao2 />
      <MeuBotao2 />
      <hr />
      <MyPanelButtons />
    </>
  );
}