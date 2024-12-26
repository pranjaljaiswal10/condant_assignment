import { TiHomeOutline } from "react-icons/ti";
import { PiCode, PiPhoneBold } from "react-icons/pi";
import { IoMdCloudOutline } from "react-icons/io";
import { LuBookText, LuSettings, LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center gap-2">
      <img src="/logo.svg" alt="" className="w-5" />
      <span>CodAnt AI</span>
      </div>
      <span className="block">pranjaljai...</span>
      <ul>
        <li className="flex items-center gap-2">
          <TiHomeOutline /> Repositories
        </li>
        <li className="flex items-center gap-2">
          <PiCode /> AI Code Review
        </li>
        <li className="flex gap-2">
          {" "}
          <IoMdCloudOutline /> Cloud Security{" "}
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <LuBookText /> How to Use{" "}
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <LuSettings /> Settings{" "}
        </li>
      </ul>
      <ul>
        <li className="flex items-center gap-2"><PiPhoneBold /> Support</li>
        <li className="flex items-center gap-2"><LuLogOut /> Logout</li>
      </ul>
    </>
  );
};

export default Sidebar;
