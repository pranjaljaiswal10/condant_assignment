import { TiHomeOutline } from "react-icons/ti";
import { PiCode, PiPhoneBold } from "react-icons/pi";
import { IoIosArrowDown, IoMdCloudOutline } from "react-icons/io";
import { LuBookText, LuSettings, LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="h-screen hidden lg:block border-2 border-gray-300 rounded-lg p-6">
      <div className="flex gap-2 ">
        <img src="/logo.svg" alt="" className="w-5" />
        <span>CodAnt AI</span>
      </div>
      <p className="px-2 py-1  my-3 flex items-center justify-between border-2 border-solid border-gray-500 rounded-lg">
        pranjaljaiswal  <IoIosArrowDown />
      </p>

      <ul className="space-y-2 font-medium">
        <li className="flex items-center gap-2 bg-[#1570EF]  border-2 rounded-lg p-2 pr-16 text-white ">
          <TiHomeOutline /> Repositories
        </li>
        <li className="flex items-center gap-2 px-2">
          <PiCode /> AI Code Review
        </li>
        <li className="flex items-center gap-2 px-2">
          {" "}
          <IoMdCloudOutline /> Cloud Security{" "}
        </li>
        <li className="flex items-center gap-2 px-2">
          {" "}
          <LuBookText /> How to Use{" "}
        </li>
        <li className="flex items-center gap-2 px-2">
          {" "}
          <LuSettings /> Settings{" "}
        </li>
      </ul>
      <ul className="space-y-2 relative -bottom-[22rem] font-medium">
        <li className="flex items-center gap-2 px-2">
          <PiPhoneBold /> Support
        </li>
        <li className="flex items-center gap-2 px-2">
          <LuLogOut /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
