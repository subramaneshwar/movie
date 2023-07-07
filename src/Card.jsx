import React from 'react'
import { useContext } from 'react'
import { mycontext } from './App'

function Card() {

    const Data = useContext(mycontext)
    console.log(Data.Search);
    // const data = Data.Search;
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"50px",height:"100%",width:"100%"}} >
      { Data.map(ele =>(
        <div style={{width:"150px",height:"50px"}}>
          <div style={{margin:"10px"}}>
          <img src={ele.Poster} alt="" width="100"/>
          <p style={{color:"white"}}>{ele.Title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card