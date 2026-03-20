"use client"

import Link from "next/link";
import { useState } from "react"
import styles from "../page.module.css"
import { getTasks } from "@/api"

export default function MyTodoList(){
        const [tasks, setTasks] = useState([]);
        const [description, setDiscription] = useState("");

        function handleSubmit(evt){
            evt.preventDefault();
            setTasks([...tasks, description])
            setDiscription("");
        }
    return (
        <>
            <h1>Lista de Tarefas</h1>
            <hr />

            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    placeholder="Descrição da tarefa" 
                    value={description} 
                    onChange={(evt) => setDiscription(evt.target.value)}
                />
                <button>Adicionar</button>
            </form>

            <hr />

            {tasks.length === 0 && <p>Adicione uma tarefa para exibir aqui.</p>}
            <ol>
                {tasks.map((task) => (
                    <li key={task}>{task}</li>
                ))}
            </ol>

            <hr />
            <Link href="/">Voltar</Link>
            <hr />
            <button 
                onClick={async () => { 
                    const backEndTasks = await getTasks(); 
                    console.log('backEndTasks', backEndTasks.data) }
                }
            >
                Buscar tarefas no servidor
            </button>
        </>
    );
}