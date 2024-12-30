import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/SearchBar.css"

function SearchBar() {

    const[from,setFrom] = useState("");
    const[to,setTo] = useState("");
    const navigate = useNavigate();
    const  handleSearch = ()=>{
        if(from && to){
            navigate(`/passangerdetails?from=${from}&to=${to}`);
        }
        else{
            alert('Please fill both From and To fields.');
        }
    }


  return (
    <div className='search-bar'>
        <input type="text"
        placeholder='From'
        value={from}
        onChange={(e)=>setFrom(e.target.value)}
        />
          <input type="text"
              placeholder='To'
              value={to}
              onChange={(e) => setTo(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
      
      
    </div>
  )
}

export default SearchBar
