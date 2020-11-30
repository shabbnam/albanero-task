import React from 'react'

function DisplayItems(props) {
  
   console.log("displayItems")
   console.log(props.rowItems)
  
    return (
        <div>
            {props.items.map((item)=>{
                return  <div  key={item.uniqueId}>{props.DisplayType(item,props)}</div>
            })}
            
        </div>
    )
}

export default React.memo(DisplayItems)
