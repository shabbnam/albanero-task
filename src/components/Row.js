import React from 'react'

function Row({uniqueId,name,value},props) {

    return (
        <div className="rowItem" >
        <div> {name} </div>
         <div>{value} </div>
        <h1 className="delete-Btn" onClick={()=>props.deleteRow(uniqueId)}>&times;</h1>
        </div>
    
    
    )
}

export default Row
