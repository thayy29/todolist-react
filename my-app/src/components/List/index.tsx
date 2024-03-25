/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckSquare, PlusCircle } from "phosphor-react";
import {
  Box,
  ListaWrapper,
  BoxContent,
  TaskInput,
  ButtonAdd,
  BoxList,
} from "./styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../Task";

export function List() {
  //guarda a lista toda
  const [tasks, setTasks] = useState(["Nova Task"]);

  //guarda o estado mais atualizado
  const [newTask, setNewTask] = useState("");

  //adiciona nova task
  function handleCreateNewTask(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log("adicionou");
    const newTask = event.target["0"].value;

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  //monitora alterações no input
  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  //verificar se o botão foi pressionado sem enviar nenhum valor
  const isNewTaskEmpty = newTask.length === 0;

  return (
    <ListaWrapper>
      <Box>
        <BoxContent>
          <h1>
            <CheckSquare size={40} color="#00D26A" />
            TodoList
          </h1>
        </BoxContent>

        <form action="#" onSubmit={handleCreateNewTask}>
          <BoxContent>
            <TaskInput
              name="task"
              value={newTask}
              onChange={handleNewCommentChange}
              placeholder="O que você gostaria de adicionar?"
            />
            <ButtonAdd type="submit" disabled={isNewTaskEmpty}>
              <PlusCircle size={40} color="#909db7" />
            </ButtonAdd>
          </BoxContent>
        </form>
      </Box>

      <BoxList>
        {tasks.map((name) => {
          return <Task key="tasks" name={name} />;
        })}
      </BoxList>
    </ListaWrapper>
  );
}
