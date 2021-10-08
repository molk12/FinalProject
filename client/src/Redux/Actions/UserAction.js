import { CLEARERRORS, CURRENT, FAIL, LOAD, LOGIN, LOGOUT, REGISTER , GET_DOCOTRS} from "../Types/Usertypes"
import axios from 'axios'


export const register=(user,history)=>async (dispatch)=>{
   dispatch({type:LOAD})
    try {
        const res= await axios.post('/api/SignUp',user)
    
        dispatch({type:REGISTER,payload:res.data}) //{msg,user,token}
    
        history.push('/Profile')
    
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data})
        
      
    }
}

/////LOGIN////

export const login =(user,history)=> async (dispatch)=> {
    try {
      const res=  await axios.post('/api/SignIn',user)  
    dispatch({type:LOGIN,payload:res.data}) //msg,foundemail(user),token
    history.push('/Profile')
} catch (error) {
    dispatch({type:FAIL,payload:error.response.data})
        
    }
}

//CURRENT//
export const current=()=> async (dispatch) =>{
const config={
    headers:{Authorization:localStorage.getItem('token')
    }
}
    try {
   const res= await axios.get('/api/current',config)
   dispatch({type:CURRENT,payload:res.data.user})
console.log(res.data.user)
} catch (error) {
    console.log(error)
}
}
///LOUGOUT//
export const logout=()=> {
    return {type:LOGOUT}
}
export const clearerrors=()=> {
    return {type:CLEARERRORS}
}

////GET DOCTORS///

export const getdoctors=()=>async (dispatch)=> {
    try {
        const res=   await axios.get('/api/doctors')
    
    
        dispatch({type: GET_DOCOTRS,payload:res.data.doctors})
    } catch (error) {
        console.log (error)
    }
       }
