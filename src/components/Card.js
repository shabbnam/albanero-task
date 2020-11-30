import React from 'react'

function Card({uniqueId,name,value}) {
    return (
      <div className="note">
      <div><h1>{name}</h1>
      <h1>{uniqueId}</h1>
      </div>
      <p>{value}</p>
  
      </div>
           
      
    )
}



export default Card
