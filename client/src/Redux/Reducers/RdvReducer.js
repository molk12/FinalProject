
import { editrdv } from "../Actions/RdvActions";
import { EDITRDV, GETRDV } from "../Types/Rdvtypes";


 const initialState={
  Rdvs:[]
 }
 const RdvReducer=(state=initialState,action)=>{
    
    switch (action.type) {
        case GETRDV:
            
          return  {...state, Rdvs:action.payload}
    
                 
    
        default:
         return state
    }
 }
 export default RdvReducer