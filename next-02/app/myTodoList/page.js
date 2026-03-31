"use client"

import Link from "next/link";
import { useState } from "react";
import styles from "../page.module.css";
import { getTasks } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function MyTodoList(){
        const { data, isFetching, error } = useQuery({ 
            queryKey: ["tasks"], 
            queryFn: getTasks
        });

        const mutation = useMutation({
            mutationFn: addTask,
            onSuccess: () => {
                QueryClient.invalidateQueries({ queryKey: ["tasks"]});
            }
        });

        const [description, setDiscription] = useState("");

        function handleSubmit(evt){
            evt.preventDefault();
            if (!description){
                alert("Descrição é um campo obrigatório!");
            }
            mutation.mutate({ description });
            setDiscription("");
        }
    return (
        <>
            <h1>Lista de Tarefas</h1>
            <hr />
            {error && <h3>Erro: {error}</h3>}
            {isFetching && <h3>Carregando dados do backend</h3>}
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

            {data?.results.length === 0 && <p>Adicione uma tarefa para exibir aqui.</p>}
            <ol>
                {data?.results.map((task) => (
                    <li key={task.objectId}>{task.description}</li>
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