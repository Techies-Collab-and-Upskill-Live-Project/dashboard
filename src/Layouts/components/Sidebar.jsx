import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo V 4.png";
import { MdDashboard, MdLogout } from "react-icons/md";
import { useState } from "react";
import { NavData } from "./Data";
import Dashboard from "../../assets/Vector (4).png";

const SideBar = ({ openMenu, closeMenu }) => {
  const path = useLocation().pathname;

  const [expanded, setExpanded] = useState(true);

  const handleClick = () => {
    closeMenu();
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`lg:w-max lg:shrink-0 bg-[#181818] flex lg:flex-col  ${
        openMenu ? "w-fit z-[9999]" : "w-0 z-0 overflow-hidden transition-all"
      }`}
    >
      <div className="pt-[25px]">
        <div className="hidden lg:flex px-[8px] gap-2">
          <img
            src={logo}
            className={expanded ? "self-center" : ""}
            alt="Tcu logo"
          />
          {expanded && <h3 className="text-white font-medium">TCU</h3>}
        </div>

        <nav className="pt-[20px] lg:pt-0">
          <div className="flex pt-[15px] flex-col items-center font-[500] text-[#fff]">
            {/* DASHBOARD */}
            <div className="w-full flex flex-col self-start">
              <NavLink
                to="/dashboard"
                onClick={() => handleClick()}
                className={
                  ({ isActive }) =>
                    isActive
                      ? `${
                          path === "/dashboard" && "bg-[#13BA00]"
                        } flex item-center justify-center py-[10px] rounded-md gap-x-[8px] px-[10px]`
                      : " flex item-center py-[10px] rounded-md"
                }
              >
                <img src={Dashboard} className="w-4 h-4" alt="Dashboard" />
                <span
                  className={`overflow-hidden transition-all max-lg:hidden ${
                    expanded
                      ? "w-[200px] leading-[14.4px] tracking-[-0.24px] text-[12px] font-[500]"
                      : "hidden"
                  }`}
                >
                  Dashboard
                </span>
              </NavLink>
            </div>

            <div className="w-full flex flex-col self-start">
              {NavData.map((item, id) => (
                <NavLink
                  key={id}
                  to={item.to}
                  onClick={() => handleClick()}
                  className={({ isActive }) =>
                    isActive
                      ? " bg-[#13BA00] rounded-md flex items-center gap-x-[8px] px-[10px] py-[10px]"
                      : " flex items-center justify-center gap-x-[8px] p-[10px]"
                  }
                >
                <img src={item.icon} className="w-4 h-4"  alt="" />
                  <span
                    className={`overflow-hidden transition-all max-lg:hidden ${
                      expanded
                        ? "w-[200px] leading-[14.4px] tracking-[-0.24px] text-[12px] font-[500]"
                        : "hidden"
                    }`}
                  >
                    {item.text}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* LOGOUT */}
            <div className="w-full text-red-800 flex flex-col self-start">
              <NavLink
                to="#"
                className="flex items-center gap-x-[8px] px-[10px] py-[15px]"
              >
                <MdLogout />
                <span
                  onClick={() => setExpanded((prev) => !prev)}
                  className={`overflow-hidden transition-all max-lg:hidden ${
                    expanded
                      ? "leading-[14.4px] tracking-[-0.24px] text-[12px] font-[500]"
                      : "hidden"
                  }`}
                >
                  Logout
                </span>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
