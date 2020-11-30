import {ADD_ITEM,DELETE_ITEM} from "../constants/ItemConstants"
export default function ItemReducer(state,action)
{
    switch(action.type)
    {
        case ADD_ITEM :return {...state ,commodityItems:[...state.commodityItems , action.payload]}
        case DELETE_ITEM: return {...state,commodityItems:state.commodityItems.filter(item=>item.uniqueId !==action.payload)}

        default:return state


    }


}