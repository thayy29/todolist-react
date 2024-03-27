import { ThemeProvider } from "styled-components";
import { List } from "./components/List";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/themes/light";
import { TaskProps } from "./components/Task";

export function App({ name }: TaskProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <div>
          <List name={name as string} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
