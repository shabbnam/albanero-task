import {ADD_ITEM,DELETE_ITEM} from "../constants/ItemConstants"

function addItem(item)
{
    return {
        type:ADD_ITEM,
        payload:item
    }

}
 function deleteItem(item)
{
    return {
        type:DELETE_ITEM,
        payload:item
    }

}
export {deleteItem,addItem}