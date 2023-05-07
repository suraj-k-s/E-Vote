import { useState } from "react";
import './index.css'
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
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
import District from "./scenes/District"
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Sectionpart from "./scenes/Sectionpart";
import Place from "./scenes/Place";
import Ward from "./scenes/Ward";
import Electionagentregistration from "./scenes/Electionagentregistration";
import Electionagentlist from "./scenes/Electionagentlist";
import Userlist from "./scenes/Userlist";
import Electiondeclaration from "./scenes/Declaration";
import Assignagent from "./scenes/Assignagent";
import Assignelectionagentlist from "./scenes/Assignelectionagentlist";
import Complaints from "./scenes/Complaints";
import Electionagentnotassignlist from "./scenes/Electionagentnotassignlist";
import Electionagentassignlist from "./scenes/Electionagentassignlist";
import Feedback from "./scenes/Feedback";
import Votes from "./scenes/Votes"


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/District" element={<District />} />
              <Route path="/Sectionpart" element={<Sectionpart />} />
              <Route path="/Place" element={<Place />} />
              <Route path="/Ward" element={<Ward />} />
              <Route path="/Electionagentregistration" element={<Electionagentregistration />} />
              <Route path="/Electionagentlist" element={<Electionagentlist />} />
              <Route path="/Userlist" element={<Userlist />} />
              <Route path="/Declaration" element={<Electiondeclaration />} />
              <Route path="/Electionagentnotassignlist" element={<Electionagentnotassignlist />} />
              <Route path="/Electionagentassignlist" element={<Electionagentassignlist />} />
              <Route path="/Assignelectionagentlist/:eid" element={<Assignelectionagentlist />} />
              <Route path="/Feedback" element={<Feedback />} />
              <Route path="/Assignagent/:eid/:aid" element={<Assignagent />} />
              <Route path="/Complaints" element={<Complaints />} />
              <Route path="/Votes" element={<Votes />} />
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
  );
}

export default App;
