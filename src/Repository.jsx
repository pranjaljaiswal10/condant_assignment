import {BsDatabase} from "react-icons/bs"
import { relativeTime } from "./utils/helper";

const Repository = (props) => {
   const  {name,language,visibility,size,updated_at,created_at}=props
  return (
    <div className="p-3 space-y-2">
      <div className="flex items-center gap-2">
        <span className="font-semibold">{name}</span>
    <span className="text-blue-800   px-2 border rounded-xl bg-sky-200 border-sky-400">{ `${visibility.slice(0,1).toUpperCase()}${visibility.slice(1,visibility.length)}`}</span>
      </div>
      <ul className="flex gap-2 text-sm">
        <li className="flex items-center gap-2">
          {language} <span className="bg-[#1570EF] p-1 rounded-full"></span>
        </li>
        <li className="flex items-center gap-1"> <BsDatabase/> {size}KB</li>
        <li>Updated {relativeTime(updated_at)}</li>
      </ul>
    </div>
  );
}

export default Repository