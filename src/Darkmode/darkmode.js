import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.test {
  background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  transition: all 0.3s;
}

`;
function DarkMode() {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>
          <button
            onClick={e =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            DarkOrLight
          </button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default DarkMode
