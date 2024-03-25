import { TaskWrapper, ContentTask, Container } from "./styles";

export interface TaskItem {
  id: number;
  name: string;
}

export function Task({ name }: TaskItem) {
  return (
    <TaskWrapper>
      <main>
        <Container>
          <ContentTask>
            <p>{name}</p>
          </ContentTask>
        </Container>
      </main>
    </TaskWrapper>
  );
}
