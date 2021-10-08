import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { login, register,clearerrors } from "../Redux/Actions/UserAction"
import {useHistory} from "react-router-dom"
import {Redirect} from "react-router-dom"


// import UserReducer from "../Redux/Reducers/UserReducer"



function Register(){


	const [regname,setregname]=useState("")
	const [regemail,setregemail]=useState("")
   const [regpassword,setregpassword]=useState("")
   const [signemail,setsignemail]=useState("")
   const [signpassword,setsignpassword]=useState("")
   const dispatch= useDispatch()
   const history=useHistory()
   const errors=useSelector(state=>state.UserReducer.errors)
   const [isproff,setisproff]=useState("NON")
   const [speciality,setspeciality]=useState("")
   const [Adress,setAdress]=useState("")
   const [phone,setphone]=useState("")
   const [role,setrole]=useState('')

   
 
 return (
	 <div className="imgs"> 
 <img  style={{width:"25rem",height:"25rem"}}src="https://imagecdn.med.ovh/unsafe/325x292/filters:format(webp)/https://cdn.med.ovh/img/imghome.svg" alt="hhh"/>
    
{errors && errors.map(el=> alert (el.msg))}


	<div className="login-wrap">
	<div className="login-html">
	  <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
	  <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
	  <div className="login-form">
		<div className="sign-in-htm">
		  <div className="group">
			<label htmlFor="user" className="label">Email</label>
			<input id="user" type="text" className="input"  value={signemail} onChange={(e)=>{setsignemail(e.target.value);dispatch(clearerrors())}} />
		  </div>
		  <div className="group">
			<label htmlFor="pass" className="label">Password</label>
			<input id="pass" type="password" className="input" data-type="password"  value={signpassword} onChange={(e)=>{setsignpassword(e.target.value);dispatch(clearerrors())}}/>
		  </div>
		  <div className="group">
			<input id="check" type="checkbox" className="check" defaultChecked />
			<label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
		  </div>
		  <div className="group">
			<input type="submit" className="button" defaultValue="Sign In" onClick={()=>dispatch(login({email:signemail,password:signpassword},history))}/>
		  </div>
		  <div className="hr" />
		  <div className="foot-lnk">
			<a href="#forgot">Forgot Password?</a>
		  </div>
		</div>



		<div className="sign-up-htm">
		  <div className="group">
			

		
		<h5> Vous Etes Un Proffessionnels De Santé ?</h5>
		  <select className="form-control"  value={isproff} onChange={(e)=>setisproff(e.target.value)}>
		  <option value="NON">NON</option>
          <option value="OUI">OUI</option>
       
	
      </select>

 
		{isproff ==="NON" ?
		<div>		
			<label for="user" className="label">Username</label>
			<input id="user" type="text" className="input" value={regname} onChange={(e)=>setregname(e.target.value)}/>

			<div className="group">
				<label for="pass" className="label">Password</label>
				<input id="pass" type="password" className="input" data-type="password"   value={regpassword} onChange={(e)=>setregpassword(e.target.value)}/>
			</div>


			<div className="group">
				<label for="pass" className="label">Repeat Password</label>
				<input id="pass" type="password" className="input" data-type="password"/>
			</div>
			 
			<div className="group">
				<label for="pass" className="label">Email Address</label>
				<input id="pass" type="text" className="input" value={regemail} onChange={(e)=>setregemail(e.target.value)}/>
			</div>

	
       
			<div className="group">
				<input   type="submit"  className="button" value="Sign Up" onClick={()=>dispatch(register({name:regname,password:regpassword,email:regemail, role:'patient'},history))}/>
			</div>
		

			<div className="hr"></div>

			<div className="foot-lnk">

				<label for="tab-1">Already Member? </label>
			</div>
	</div>: 
	
	//composant prof oui
	
	<div>		
			<label for="user" className="label">Username</label>
			<input id="user" type="text" className="input" value={regname} onChange={(e)=>setregname(e.target.value)}/>

			<div className="group">
				<label for="pass" className="label">Password</label>
				<input id="pass" type="password" className="input" data-type="password"   value={regpassword} onChange={(e)=>{setregpassword(e.target.value);dispatch(clearerrors())}}/>
			</div>


			<div className="group">
				<label for="pass" className="label">Repeat Password</label>
				<input id="pass" type="password" className="input" data-type="password"/>
			</div>
			 
			<div className="group">
				<label for="pass" className="label">Email Address</label>
				<input id="pass" type="text" className="input" value={regemail} onChange={(e)=>{setregemail(e.target.value);dispatch(clearerrors())}}/>
			</div>
			<div className="group">
				<label for="pass" className="label">speciality</label>
				<input id="pass" type="text" className="input" placeholder=''   value={speciality} onChange={(e)=>setspeciality(e.target.value)}/>
			</div>
			<div className="group">
				<label for="pass" className="label">Adresse</label>
				<input id="pass" type="text" className="input" placeholder=''  value={Adress} onChange={(e)=>setAdress(e.target.value)} />
			</div>
			<div className="group">
				<label for="pass" className="label">Phone Number</label>
				<input id="pass" type="text" className="input" placeholder="" value={phone} onChange={(e)=>setphone(e.target.value)}/>
			</div>
	
       
			<div className="group">
				<input   type="submit"  className="button" value="Sign Up"    value="Sign Up"
				 onClick={()=>dispatch(register({name:regname,password:regpassword,
				 email:regemail,speciality:speciality,adresse:Adress,phone_number:phone, role:'professionnel'},history))} />
			</div>
		

			<div className="hr"></div>

			<div className="foot-lnk">

				<label for="tab-1">Already Member? </label>
			</div>
	</div>}
		</div>
	  </div>
	</div>
	</div>
  </div>
  </div>
 )
 
 
}
export default Register