import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
import Form from "./pages/form";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar/calendar";
import { mockDataTeam } from "./data/mockData";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [teamMembers, setTeamMembers] = useState(mockDataTeam);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Auto-hide sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebar(false);
    } else {
      setIsSidebar(true);
    }
  }, [isMobile]);

  const handleAddUser = (user) => {
    setTeamMembers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
  };

  const handleDeleteUser = (id) => {
    setTeamMembers(teamMembers.filter((user) => user.id !== id));
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {(!isMobile || isSidebar) && (
            <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
          )}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} isMobile={isMobile} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/team"
                element={
                  <Team
                    teamMembers={teamMembers}
                    handleDeleteUser={handleDeleteUser}
                  />
                }
              />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route
                path="/form"
                element={<Form handleAddUser={handleAddUser} />}
              />
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
