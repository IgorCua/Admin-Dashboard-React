import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { Dashboard } from './scenes/dashboard/Index';
import { Topbar } from './scenes/global/Topbar';
// import { Sidebar } from './scenes/global/Sidebar';
// import { Team } from './scenes/team';
// import { Invoices } from './scenes/invoices';
// import { Contacts } from './scenes/contacts';
// import { Bar } from './scenes/bar';
// import { Form } from './scenes/form';
// import { Line } from './scenes/line';
// import { Pie } from './scenes/Pie';
// import { FAQ } from './scenes/faq';
// import { Geography } from './scenes/geography';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
              <main className="content">
                <Topbar/>
                <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                </Routes>
              </main>
            </div>;
          </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
