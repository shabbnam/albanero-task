import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Reports from "./components/Reports"
import CommodityItems from "./components/CommodityItems"



function App() {


  return (

    
    <BrowserRouter>
    
    <Route path="/" exact={true} component={CommodityItems}></Route>
    <Route path="/reports" exact={true} component={Reports}></Route>
    
    </BrowserRouter>

  )
  
}

export default App;
