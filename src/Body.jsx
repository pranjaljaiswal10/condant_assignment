import { useEffect, useState } from "react"
import { API_URL } from "./utils/constant"
import Repository from "./Repository"


const Body = () => {
  const [list,setList]=useState([])
  const [searchTxt,setSearchTxt]=useState("")
  function handleChange(e){
  setSearchTxt(e.target.value)
  }
  useEffect(()=>{
    async function getData() {
      const response = await fetch(API_URL);
      const json=await response.json()
      console.log(json)
      setList(json)
    }
    getData()
  },[])
  return (
    <div className="repository_list">
      <h1>Repositories</h1>
      <p>{list.filter((item) => item.fork === false).length}</p>
      <input
        type="text"
        value={searchTxt}
        onChange={(e) => handleChange(e)}
        placeholder="Search Repositories"
      />
      {list
        .filter((item) => item.fork === false)
        .map((item) => (
          <Repository {...item} key={item.id} />
        ))}
    </div>
  );
}

export default Body