import { Route, Routes } from "react-router";
import DashboardLayout from "./Layouts/DashboardLayouts";
import Interns from "./components/Interns/Interns";
import Dashboard from "./components/Dashboard/Dashboard";
import Applications from "./components/Applications/Application";
import Projects from "./components/Projects/Projects";
import Messages from "./components/Message/Message";

const App = () => {
  return (
    <div className="bg-[#181818]">
    
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="interns" element={<Interns />} />
          <Route path="applications" element={<Applications />} />
          <Route path="projects" element={<Projects />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        {/* <Dashboard /> */}
      </Routes>
    </div>
  );
};

export default App;
