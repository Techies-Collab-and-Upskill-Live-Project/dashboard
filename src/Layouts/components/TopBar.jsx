
import logo from "../../assets/logo V 4.png";
import Icon from "../../assets/Icons.png";

const TopBar = ({header, setOpenMenu}) => {
  const toggleMenu = () => {
    setOpenMenu(prev => !prev )
  }

  return (
    <div className="relative w-full">
      <nav className="w-full lg:hidden fixed h-[54px] flex items-center justify-between pt-[10px] top-0 left-0 px-[10px]">
      {/* <nav className="lg:hidden w-full max-lg:h-[54px] fixed pt-[15px] left-0 px-[20px] top-0 flex justify-between"> */}
          <img src={logo}  className="" alt="" />

        <img src={Icon} onClick={toggleMenu} className="w-[30px] h-[30px]" alt="" />
      </nav>
    </div>
  );
};

export default TopBar;
