import styles from "./page.module.css"
import MeuBotao1 from "@/components/MyButton";
import { MyButton2 as MeuBotao2} from "@/components/MyButton2";

export default function Home() {
  return (
    <>
      <h1 className="titulo">Bem-vindo ao meu App</h1>
      <MeuBotao1  title="Eu sou o botão 1"/>
      <hr />
      <MeuBotao2 />
    </>
  );
}