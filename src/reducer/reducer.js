import { ADDENTRY, UPDATEENTRY, FINDENTRY, FINDALLENTRIES, DELETEENTRY, LOGINOP } from "../action/action"
import axios from 'axios'
import { addEntry } from "../action/actionfunction"
import { findALLEntries } from "../action/actionfunction"



const reducer = (state=[], action) => {

    switch (action.type) {
        case ADDENTRY:
                
        state=[...action.payload]
             
            return state

        case UPDATEENTRY:
            return state
        case FINDENTRY:
            
            
            return state
        case FINDALLENTRIES:
            
            state= [...action.payload]
           return state
        case DELETEENTRY:
            
            return state
        case LOGINOP:
                return state
        default:
            return state
    }

}


export default reducer