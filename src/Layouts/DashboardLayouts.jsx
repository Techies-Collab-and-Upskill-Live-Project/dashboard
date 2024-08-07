import { NavLink } from "react-router-dom";
// import logo from "../assets/logo V 4.png";
import TopBar from "./components/TopBar";
import SideBar from "./components/Sidebar";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [header, setHeader] = useState("Dashboard");

  return (
    <div className="bg-black">
      <div className="relative w-full h-screen flex">
        <div className="">
          <TopBar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            header={header}
          />
        </div>

        <div className="">
          <SideBar openMenu={openMenu} closeMenu={() => setOpenMenu(false)} />
        </div>

        {/* <div className="w-full max-lg:flex-1 h-full overflow-hidden z-[30]"> */}
        <div className="w-full max-lg:flex-1 h-full lg:pt-0 pt-[50px] px-[10px] lg:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
