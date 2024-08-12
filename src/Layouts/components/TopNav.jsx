import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import img from "./Assets/logo V 4.png";
import img1 from "../../assets/Icons.png";
import img2 from "../../assets/Account circle.png";
import img3 from "../../assets/Group.png";

const TopNav = ({title}) => {
  return (
    <div className="w-full text-[#f5f5f5] hidden bg-[#181818] sticky pr-8 top-0 z-30 h-[px] py-[15px] px-[x] lg:flex items-center lg:justify-between">
      <div className="flex items-center gap-2">
        <img src={img1} alt="" />
        <h2 className="text-2xl">{title}</h2>
      </div>

      <div className="flex gap-3 items-center">
        <img src={img3} alt="" />

        <div className="flex gap-2 items-center">
          <img className="w-[40px]" src={img2} alt="" />
          <p className="text-2xl">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
