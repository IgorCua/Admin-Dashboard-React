import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider>
            <CssBaseline/>
            <div className="app">
              <main className="content"></main>
            </div>;
          </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
