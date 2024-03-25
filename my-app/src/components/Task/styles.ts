import styled from "styled-components";

export const TaskWrapper = styled.div`
  margin-top: 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
`;

export const ContentTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: calc(17rem - 2rem);
  padding: 0.75rem;

  flex: 1;

  background-color: ${(props) => props.theme["gray-100"]};
  color: ${(props) => props.theme["gray-200"]};
  font-weight: 600;

  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03),
    0 8px 16px rgba(0, 0, 0, 0.03), 0 16px 32px rgba(0, 0, 0, 0.03);

  border-color: 2px solid ${(props) => props.theme["blue-100"]};

  font-size: 1.2rem;
  font-family: "Roboto";
`;
