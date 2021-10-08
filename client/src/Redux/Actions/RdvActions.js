import axios from "axios"
import { GETRDV } from "../Types/Rdvtypes"

//get rdv///
export const getrdv=()=> async(dispatch)=> {
    try {
        const res= await axios.get('/api/rdv/getRdv')
        dispatch({type:GETRDV,payload:res.data.Rdvs})
        console.log(res.data.Rdvs)
    } catch (error) {
        console.log (error)
        
    }
}
/// add new rdv///
export const addnewRdv=({name,email,date,doc_id})=> async (dispatch)=>{
    const config={
        headers:{Authorization:localStorage.getItem('token')
        }
    }
    try {
       
     const res= await axios.post('/api/rdv/Rdv',{name,email,date,doc_id},config)
 
    dispatch(getrdv())
 
    } catch (error) {
       console.log(error)
      }
}

     //// deltete Rdv//

 export const deleteRdv =(id)=>async(dispatch)=> {
    const config={
        headers:{Authorization:localStorage.getItem('token')
        }
    }
  try {
      const res= await axios.delete(`/api/rdv/${id}`,config)
      dispatch(getrdv())
 } catch (error) {
     console.log(error)
     
 }
}




//edit Rdv ///
 export const editrdv=(id,newrdv)=> async(dispatch)=> {
    const config={
        headers:{Authorization:localStorage.getItem('token')
        }
    }
  try {
      console.log(id)
      console.log(newrdv)
   await axios.put(`/api/rdv/${id}`,newrdv,config)   
  dispatch(getrdv())
 } catch (error) {
      console.log(error.response.data)
     
  }
 }