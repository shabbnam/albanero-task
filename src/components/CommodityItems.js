import React,{useState,useCallback} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addItem,deleteItem} from "../redux/actions/ItemActions"
import Row from "./Row"
import Card from "./Card"
import {Link} from "react-router-dom"
import DisplayItems from "./DisplayItems"
import ErrBoundary from "./ErrBoundary"

function CommodityItems(props) {
    
    var date=new Date()
    var [month,year]=[date.toLocaleString('default', { month: 'short' }),date.getFullYear()]
    var [Item,setItem]=useState({name:"",value:""})

    var fields=[{
        name:"name",
        placehoder:"Enter name",
        type:"text"
    },{
        name:"value",
        placehoder:"Enter value",
        type:"number"
    }]
    let CommodityItems= useSelector(state => state.commodityItems)
    let rowItems=CommodityItems.filter(item=>  item.value!=="" && item.name!=="" && item.displayType==="row" )
    let cardItems=CommodityItems.filter(item=>  item.value!=="" && item.name!=="" &&  item.displayType==="card")
   
    
    var dispatch = useDispatch()
    

    const AddItem=(Item,displayType)=>{
     
        
        new Promise((resolve,reject)=>{
            /// random number generation  &  * 1 to convert to number
            var uniqueId=[...Array(8).keys()].reduce((acc, item)=>acc+Math.ceil(Math.random()*8),"")*1 
             
            // add a item to commidityItems
            if(Item.name && Item.value){
                resolve(dispatch(addItem({...Item,uniqueId,displayType})))
            }
        }).then(()=>{
                
                //After Adding to the store set to default (empty)
                
                 setItem({name:"",value:""}) 
            })

        }
     



    //delete an item from store
    function deleteRow(Id) 
    {
       Id && dispatch(deleteItem(Id))
    }

    return (
       <div className="heroImg">
       <header>  Grocery Menu for {month} {year}
       <h1 className="Covid"><Link to="/reports" >Covid Insights</Link></h1>
       </header>
       <section>
           <div className="row">
              <form>
              <div className="fields">
              {fields.map(({name,placehoder,type})=>{
                    return  <div key={name}>
                    <label>{placehoder}</label>
                    <input name={name} placeholder={placehoder} autocomplete="off" type={type} value={Item[name]} onChange={(e)=>{
                    setItem({...Item,[name] : type==="text" ?  e.target.value : parseInt(e.target.value)})
                    }}>
                    </input></div>
                     })}
              </div>

              <div className="row">
              <div className="btn-container">
              <button type="submit" value="row" onClick={(e)=>{
              e.preventDefault()
              AddItem(Item,"row")}}
              >Add Row</button>

              <button type="submit" value="card" onClick={(e)=>
              {e.preventDefault() 
              AddItem(Item,"card")}}>Add Card</button>
              </div>
              </div>
                 
              </form>
           </div>
       </section>

      <div className="ShowItems">
    
  
   <DisplayItems items={rowItems} DisplayType={Row} deleteRow={deleteRow} />
  
   <DisplayItems items={cardItems} DisplayType={Card}  />

  
  
  
     
      </div> 
       
       </div>

    )
}





export default CommodityItems 
