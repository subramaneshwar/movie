import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

export const mycontext = createContext();
function App() {
  const [Datas, setDatas] = useState([])
  const [Data, setData] = useState([])
  const allData = [...Data,...Datas]
  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=english&apikey=dc8abc14&").then(data => data.json()).then(data => setData(...Data,data.Search));
    fetch("http://www.omdbapi.com/?s=hindi&apikey=dc8abc14&").then(data => data.json()).then(data => setDatas(...Data,data.Search));
  }, [])
  

  return (
    <div className="App" style={{background:"black",height:"100vh",width:"100%"}}>
   <mycontext.Provider value={allData}>
      <h1 style={{color:"red",textAlign:"center"}}>Movies</h1>
      <Card/>
   </mycontext.Provider>
    </div>
  );
}

export default App;
