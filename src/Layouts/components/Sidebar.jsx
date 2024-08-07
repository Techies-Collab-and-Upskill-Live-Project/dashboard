import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo V 4.png";
import { MdDashboard, MdLogout } from "react-icons/md";
import { useState } from "react";
import { NavData } from "./Data";

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
      <div className="pt-[25px] border">
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
            <div className="flex flex-col">
              {/* DASHBOARD */}
              <div className="w-full flex flex-col self-start">
                <NavLink
                  to="/dashboard"
                  onClick={() => handleClick()}
                  className={({ isActive }) =>
                    isActive
                      ? `${
                          path === "/dashboard" && "bg-[#13BA00] rounded-md"
                        } flex items-center gap-x-[8px] p-[10px]`
                      : " flex items-center gap-x-[8px] p-[10px]"
                  }
                >
                  <MdDashboard />
                  <span className={`max-lg:hidden transition-all overflow-hidden  ${expanded ? "text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]" : "hidden"}`}>
                    Dashboard
                  </span>
                </NavLink>
              </div>

              <div>
                {NavData.map((item, id) => (
                  <NavLink
                    key={id}
                    to={item.to}
                    onClick={() => handleClick()}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-[#13BA00] rounded-md flex items-center gap-x-[8px] p-[10px]"
                        : " flex items-center gap-x-[8px] p-[10px]"
                    }
                  >
                    {item.icon}
                    {/* <span className={`max-lg:hidden overflow-hidden transition-all ${closeMenu ? "text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px] pr-[70px] py-2" : "hidden"}`}> */}
                    {/* <span className={`max-lg:hidden overflow-hidden transition-all ${!closeMenu ? "hidden" : "text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px] pr-[70px] py-2"}`}>
                    {item.text}
                  </span> */}
                    <span
                      className={`overflow-hidden transition-all max-lg:hidden ${
                        expanded
                          ? "w-52 ml-3 leading-[14.4px] tracking-[-0.24px] text-[12px] font-[500]"
                          : "w-0"
                      }`}
                    >
                      {item.text}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* LOGOUT */}
            <div className="w-full text-red-800 flex flex-col self-start">
              <NavLink
                to="#"
                className="flex items-center gap-x-[8px] p-[10px]"
              >
                <MdLogout />
                <span
                  onClick={() => setExpanded((prev) => !prev)}
                  className={`overflow-hidden transition-all max-lg:hidden ${
                    expanded
                      ? "w-52 ml-3 leading-[14.4px] tracking-[-0.24px] text-[12px] font-[500]"
                      : "w-0"
                  }`}
                >
                  Logout
                </span>
              </NavLink>
              <button>
                {/* <img src={avatar} className="w-[24px] h-[24px] rounded-full"/> */}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
