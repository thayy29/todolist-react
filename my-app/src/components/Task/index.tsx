import { Trash } from "phosphor-react";
import {
  TaskWrapper,
  ContentTask,
  Container,
  ButtonRemove,
  IconTask,
} from "./styles";

export interface TaskProps {
  name: string;
  onDelete: (task: string) => void;
}

export function Task({ name, onDelete }: TaskProps) {
  function handleDeleteTask() {
    onDelete(name);
  }
  return (
    <TaskWrapper>
      <main>
        <Container>
          <ContentTask>
            <p>{name}</p>

            {/* <ButtonCheck>
              <IconTask>
                <Check size={32} color="#00D26A" />
              </IconTask>
            </ButtonCheck> */}
          </ContentTask>
          <ButtonRemove onClick={handleDeleteTask} title="Deletar tarefa">
            <IconTask>
              <Trash size={32} color="#FF6B6B" />
            </IconTask>
          </ButtonRemove>
        </Container>
      </main>
    </TaskWrapper>
  );
}
