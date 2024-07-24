import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { Dashboard } from './scenes/dashboard/Index';
import { Topbar } from './scenes/global/Topbar';
import { Sidebar } from './scenes/global/Sidebar';
import { Team } from './scenes/team/Index.jsx';
import { Invoices } from './scenes/invoices/Index.jsx';
import { Contacts } from './scenes/contacts/index.jsx';
import { Form } from './scenes/form/Index.js';
import { Calendar } from './scenes/calendar/Index.jsx';
import { FAQ } from './scenes/faq/Index.jsx';
import { Bar } from './scenes/bar/Index.jsx';
import { Pie } from './scenes/pie/Index.jsx';
import { Line } from './scenes/line/Index.jsx';
import { Geography } from './scenes/geography/Index.jsx';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
              <Sidebar/>
              <main className="content">
                <Topbar/>
                <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/team' element={<Team/>}/>
                  <Route path='/contacts' element={<Contacts/>}/>
                  <Route path='/invoices' element={<Invoices/>}/>
                  <Route path='/form' element={<Form/>}/>
                  <Route path='/calendar' element={<Calendar/>}/>
                  <Route path='/faq' element={<FAQ/>}/>
                  <Route path='/bar' element={<Bar/>}/>
                  <Route path='/pie' element={<Pie/>}/>
                  <Route path='/line' element={<Line/>}/>
                  <Route path='/geography' element={<Geography/>}/>
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
