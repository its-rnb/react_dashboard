import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ColorModeContext, useMode } from "./themes";

// CssBaseline restores css to defaults
// ThemeProvider gives ability to pass selected themes to materialUI
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./scenes/global/topbar"
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";

function App() {

  // to access theme & colorMode
  const [theme, colorMode] = useMode();

  const [isSidebar, setIsSidebar] = useState(true);

  return (

    // To get access to light/dark mode throughout app
    <ColorModeContext.Provider value={colorMode}>

      {/* To give same access to materialUI */}
      <ThemeProvider theme={theme}>

        {/* To reset css to defaults, handled by materialUI */}
        <CssBaseline />

        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>

      </ThemeProvider>

    </ColorModeContext.Provider>
  )
}

export default App;
