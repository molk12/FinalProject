import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getrdv } from '../Redux/Actions/RdvActions'
import { current } from '../Redux/Actions/UserAction'

import RdvCard from './RdvCard'


function Profil(){

const dispatch= useDispatch()

useEffect ( () => {
dispatch(current())
dispatch(getrdv())
},[]
)

const user = useSelector (state => state.UserReducer.user)
const Rdv= useSelector(state=>state.RdvReducer.Rdvs)
    
    return (

         <div className="row py-5 px-4">
        <div >
          {/* Profile widget */}
          <div >
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
               {user && user.role=="professionnel" ?   <div className="profile mr-3"><img src="https://image.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg" alt="..." width={130} className="rounded mb-2 img-thumbnail" /><a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
               </div>:  user &&user.role=="patient" &&  <div className="profile mr-3"><img src="https://image.freepik.com/vecteurs-libre/medecin-patient-test-ecouvillonnage-nasal-pcr_23-2148548275.jpg" alt="..." width={130} className="rounded mb-2 img-thumbnail" /><a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
               </div>}
              
               
               <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-0"> {user && user.name} </h4>
              
                </div>
              
              </div>
            </div>
            
            {/* <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1" />Photos</small>
                  </li>
                  <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Followers</small>
                  </li>
                  <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Following</small>
                  </li>
                  </ul>
            </div> */}
            
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                <h5 className="mb-0"></h5>
                <p className="font-italic mb-0"></p>
                <h5 className="mb-0">Email:</h5>
               <p className="font-italic mb-0">{user && user.email}</p>   
               <h5 className="mb-0">Phone Number:</h5>
               <p className="font-italic mb-0">{user && user.Number}</p>  
          

                
                </div>
            </div>
            
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent Rendez-vous</h5><a href="#" className="btn btn-link text-muted">Show all</a>
              </div>
              <div className="row">
{user && user.role=='professionnel' ? 
 Rdv && Rdv.filter((el)=>el.doc_id==user._id ).map((el)=> <RdvCard el={el}/>) :
  user && user.role=='patient' && Rdv.filter((el)=>el.userId==user._id ).map((el)=> <RdvCard el={el}/>) }
              
  
              </div>
            </div>
          </div>
        </div>
      </div>

      

    )
}
export default Profil