import styled from "styled-components";

export const ListaWrapper = styled.div`
  max-width: 30rem;
  /* background-color: ${(props) => props.theme["white"]}; */
  /* background-color: gray; */
  margin: 3rem auto;
  padding: 4rem 2rem 6rem 2rem;
  height: auto;

  border-radius: 8px;

  background-color: ${(props) => props.theme["gray-200"]};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05),
    0 16px 32px rgba(0, 0, 0, 0.05), 0 32px 64px rgba(0, 0, 0, 0.05);
`;

export const Box = styled.div`
  flex-direction: "row";
  align-items: "center";
  justify-content: "center";
  max-width: 30rem;
  margin: 0 auto;
  padding-bottom: 0;
`;

export const BoxContent = styled.div`
  padding: 0 1rem;
  flex: 1;
  display: flex;
  justify-content: "center";
  align-items: "center";

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const TaskInput = styled.input`
  flex: 1;
  width: 70%;
  height: 3.5rem;

  background-color: ${(props) => props.theme["gray-200"]};
  color: ${(props) => props.theme["gray-300"]};

  padding: 0 1rem;
  border-radius: 5px;
  border: 0;

  &:focus {
    box-shadow: none;
    border-color: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-100"]};
    border: 0;
    margin: 0;
    padding: 0;
  }
`;

export const ButtonAdd = styled.button`
  background-color: transparent;
  border: 0;
  margin-left: 0.25rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BoxList = styled.div`
  background-color: transparent;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 1rem;
`;
