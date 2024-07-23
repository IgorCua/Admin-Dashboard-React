import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { Dashboard } from './scenes/dashboard/Index';
import { Topbar } from './scenes/global/Topbar';
import { Sidebar } from './scenes/global/Sidebar';
import { Team } from './scenes/team/Index.jsx';
// import { Invoices } from './scenes/invoices';
import { Contacts } from './scenes/contacts/index.jsx';
// import { Bar } from './scenes/bar';
// import { Form } from './scenes/form';
// import { Line } from './scenes/line';
// import { Pie } from './scenes/Pie';
// import { FAQ } from './scenes/faq';
// import { Geography } from './scenes/geography';
// import { Calendar } from './scenes/calendar';

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
                  {/* <Route path='/invoices' element={<Invoices/>}/> */}
                  {/* <Route path='/form' element={<Form/>}/> */}
                  {/* <Route path='/bar' element={<Bar/>}/> */}
                  {/* <Route path='/pie' element={<Pie/>}/> */}
                  {/* <Route path='/line' element={<Line/>}/> */}
                  {/* <Route path='/faq' element={<Faq/>}/> */}
                  {/* <Route path='/geography' element={<Geography/>}/> */}
                  {/* <Route path='/calendar' element={<Calendar/>}/> */}
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
