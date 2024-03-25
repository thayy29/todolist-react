import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme["gray-800"]};
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: "Roboto", monospace;
  font-weight: 400;
  font-size: 1rem;
}
`;
