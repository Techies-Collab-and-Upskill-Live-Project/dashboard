import { Route, Routes } from "react-router";
import Dashboard from "./Layouts/DashboardLayouts";
import DashboardLayout from "./Layouts/DashboardLayouts";
// import Dashboard from "./Admin/Dashboard";
// import TopBar from "./Admin/TopBar";
// import Interns from "./Content/Interns/Interns";
// import DashboardLayout from "./layout/DashboardLayout";
// import SideMenu from "./layout/SideMenu";

const App = () => {
  return (
    <div className="bg-[#181818]">
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
      {/* <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="interns" element={<Interns />} />
          <Route path="Applications" element={<Interns />} />
          <Route path="New Projects Upload" element={<Interns />} />
          <Route path="Messages" element={<Interns />} />
        </Route>
        <Dashboard />
      </Routes> */}
    </div>
  );
};

export default App;
