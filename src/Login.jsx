import { useState } from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import { IoKeySharp } from "react-icons/io5";
import {Link} from "react-router-dom"

const Login = () => {
  const [tab, setTab] = useState("SAAS");
  const handleClick = (option) => {
  setTab(option)
  }
  return (
    <div className="flex items-center gap-6 min-h-screen w-full bg-[#fafafa]">
      <div className="lg:w-1/2 border-r lg:flex justify-center h-full hidden">
        <img src="/logoFaded.png" className="absolute bottom-0 left-0" alt="" />
        <div>
          <div className=" shadow-cardAuth rounded-xl py-4 max-w-[400px] bg-white">
            <div className="flex items-center px-8 py-2 border-b">
              <img src="/logo.svg" alt="" className="w-5" />
              <p className="font-bold">AI to detect & Autofix Bad Code</p>
            </div>
            <div className="flex py-2 px-8 space-x-8 text-sm">
              <span className="flex flex-col">
                <strong>30+</strong> Language Support
              </span>
              <span className="flex flex-col">
                <strong>10K+</strong> Developers
              </span>
              <span className="flex flex-col">
                <strong> 100K+</strong>Hour Saved
              </span>
            </div>
          </div>
          <div className="flex flex-col content-start bg-white shadow-cardAuth  rounded-xl relative -top-2 left-48 w-4/6 p-4 gap-2 px-8  ">
            <div className="flex justify-between min-w-40">
              <img src="/GraphAuth.svg" alt="" className="w-16" />
              <div className="flex flex-col">
                <span className="text-blue-700 font-sembold">
                  <HiArrowLongUp className="inline" />
                  14%
                </span>
                <span className="font-light text-xs">This week</span>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <span className="font-bold block">Issue Fixed</span>
              <span className="font-bold text-xl">500K+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mx-8 w-full my-24 lg:my-0">
        <div className="shadow-cardAuth p-6 mb-10 rounded-lg border-b bg-white">
          <div className="flex justify-center items-center">
            <img src="/logo.svg" alt="" />
            <span className="font-light text-lg">CodeAnt AI</span>
          </div>
          <p className="font-semibold text-2xl my-6">Welcome to CodeAnt AI</p>
          <div className="mb-4 mx-6 bg-gray-100/70 border rounded-lg ">
            <button
              className={` w-1/2 py-3 rounded-md  ${
                tab === "SAAS" ? "bg-[#1570EF] text-white" : ""
              }`}
              onClick={() => handleClick("SAAS")}
            >
              SAAS
            </button>
            <button
              className={` w-1/2 py-3 rounded-md ${
                tab === "Self Hosted" ? "bg-[#1570EF] text-white" : ""
              } `}
              onClick={() => handleClick("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>

          <div
            className={`${
              tab === "SAAS" ? "block" : "hidden"
            } flex flex-col items-center space-y-3 lg:w-4/6 mx-6 lg:mx-auto`}
          >
            <Link to='/repository'>
              <button className="border flex p-2 mx-4 rounded-md w-full border-gray-300 items-center justify-center gap-2">
                <img src="/github.svg" className="w-5" alt="" /> Sign in with
                Github
              </button>{" "}
            </Link>
           <Link to='/repository'>
            <button className="p-2   rounded-md w-full border border-gray-300 flex items-center justify-center gap-2">
              <img src="/bitbucket.svg" alt="" className="w-5" />
              Sign in with Bitbucket
            </button>
           </Link>
          <Link to='/repository'>
            <button className="p-2  flex border rounded-md w-full border-gray-300 items-center  justify-center gap-2">
              <img src="/azure-devops.svg" alt="" className="w-5" />
              Sign in with Azure Devops
            </button>
          </Link>
          <Link to='/repository'>
            <button className="flex items-center justify-center border-gray-300 rounded-md w-full p-2  border gap-2">
              <img src="/gitlab.svg" alt="" className="w-5" />
              Sign in with GitLab
            </button>
          </Link>
          </div>
          <div
            className={`${
              tab === "Self Hosted" ? "block mb-28" : "hidden"
            } flex flex-col items-center space-y-3 mx-auto w-4/6`}
          >
           <Link to="/repository">
           <button className="flex items-center justify-center border border-gray-300 rounded-md w-full py-2">
              <img src="/gitlab.svg" alt="" className="w-5" />
              Sign in with GitLab
            </button>
           </Link> 
           <Link to="/repository">
           <button className="flex items-center justify-center border border-gray-300 rounded-md w-full py-2">
              <IoKeySharp /> Sign in with SSO
            </button>
           </Link> 
          </div>
        </div>
        <p>
          By signing up you agree to the <strong>Privacy Policy</strong>
        </p>
      </div>
    </div>
  );
  }

export default Login;
