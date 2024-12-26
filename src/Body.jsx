import { useEffect, useState } from "react"
import { API_URL } from "./utils/constant"
import Repository from "./Repository"
import {
  IoIosSearch,
  IoMdAdd,
  IoIosArrowDown,
  IoMdCloudOutline,
  IoMdClose,
} from "react-icons/io";
import {FiRefreshCw} from "react-icons/fi"
import {RxHamburgerMenu} from "react-icons/rx";
import { searchData } from "./utils/helper";
import { TiHomeOutline } from "react-icons/ti";
import { PiCode, PiPhoneBold } from "react-icons/pi";
import { LuBookText, LuSettings, LuLogOut } from "react-icons/lu";

const Body = () => {
  const [allList,setAllList]=useState([])
  const [filteredList,setFilteredList]=useState([])
  const [searchTxt,setSearchTxt]=useState("")
  const [isMenuOpen,setIsMenuOen]=useState(false)
  function handleClick(){
  setIsMenuOen(!isMenuOpen)
 }  
 useEffect(()=>{
    async function getData() {
      const response = await fetch(API_URL);
      const json=await response.json()
      setAllList(json)
      setFilteredList(json)
    }
    getData()
  },[])
  function handleChange(e){
  setSearchTxt(e.target.value)
  setFilteredList(searchData(allList,searchTxt))
  
  }
  return (
    <div className=" text-start lg:my-5 my-10 mx-2 lg:p-3 w-full border rounded-lg relative">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
        <div className="fixed top-0 z-40 bg-white w-screen lg:hidden">
          <div className="flex justify-between items-center  border-b pb-2 pt-3 mx-1">
            <div className="flex items-center gap-2 ">
              <img src="/logo.svg" alt="" className="w-5" />
              <h1>CodeAnt AI</h1>
            </div>
            <button onClick={handleClick}>
              {isMenuOpen ? (
                <IoMdClose className="mr-4 text-lg" />
              ) : (
                <RxHamburgerMenu className="mr-4" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mx-3">
              <p className="px-2 py-1  my-3 flex items-center justify-between border-2 border-solid border-gray-500 rounded-lg">
                pranjaljaiswal <IoIosArrowDown />
              </p>
              <ul className="space-y-2 font-medium">
                <li className="flex items-center gap-2  border-2 rounded-lg  pr-16  ">
                  <TiHomeOutline /> Repositories
                </li>
                <li className="flex items-center gap-2">
                  <PiCode /> AI Code Review
                </li>
                <li className="flex items-center gap-2">
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
                <li className="flex items-center gap-2">
                  <PiPhoneBold /> Support
                </li>
                <li className="flex items-center gap-2">
                  <LuLogOut /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mt-4 lg:mt-0">
          <h1 className="font-semibold text-xl">Repositories</h1>
          <p className="text-sm py-1">
            {filteredList.filter((item) => item.fork === false).length} total
            repositories
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border rounded-md px-4 py-1.5 border-gray-300 text-sm">
            <FiRefreshCw /> Refresh All
          </button>
          <button className="flex items-center gap-2 bg-[#1570EF] rounded-md text-white text-sm  px-4 py-1.5">
            <IoMdAdd /> Add Repository
          </button>
        </div>
      </div>
      <div className="flex items-center relative my-4">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => handleChange(e)}
          placeholder="Search Repositories"
          className="placeholder-black px-6 py-1 w-[300px] text-sm"
        />
        <IoIosSearch className="text-lg absolute" />
      </div>
      <div className="divide-y border  rounded-lg">
        {filteredList
          .filter((item) => item.fork === false)
          .map((item) => (
            <Repository {...item} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default Body