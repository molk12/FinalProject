import { REGISTER,FAIL,LOAD, LOGIN, CURRENT, LOGOUT, CLEARERRORS, GET_DOCOTRS } from "../Types/Usertypes";


const initialState={
    doctors:[],
    user:null,
    load:false,
    auth:false,
    errors:null,
  proff:false

    
}
const UserReducer=(state=initialState,action)=>{
     switch (action.type) {
         case LOAD:
            return {...state,load:true}
        case REGISTER:

localStorage.setItem('token',action.payload.token)

       return {...state,load:false,user:action.payload.user,auth:true} 
    
    
       //login//

        case LOGIN:

        localStorage.setItem('token',action.payload.token)
        return {...state,load:false,auth:true,user:action.payload.foundemail}   

/// current ///

        case CURRENT:
    return {...state,auth:true,user:action.payload}
    
    //FAIL//
    
          case FAIL:
        return {...state,errors:action.payload.errors,load:false}
        
//LOGOUT//
       case LOGOUT:
        localStorage.removeItem('token')  
       return {...state,user:null,errors:null,auth:false}

       /// CLEAR THE ERRORS //      
       
case CLEARERRORS:
    return {...state,errors:null}

    ///GET DOCTORS :
    case GET_DOCOTRS:
    
        return {...state, doctors:action.payload   }  
   

        default:
            return state
    }
}
export default UserReducer