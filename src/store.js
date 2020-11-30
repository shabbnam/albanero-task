import {createStore,compose} from "redux"
import ItemReducer from "./redux/reducers/ItemReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState={
    commodityItems:[]
}
const store=createStore(ItemReducer,initialState,composeEnhancers())

export default store