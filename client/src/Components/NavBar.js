import {Navbar,Nav,Container} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getdoctors, logout } from "../Redux/Actions/UserAction"
import { Link } from "react-router-dom"
import { getrdv } from "../Redux/Actions/RdvActions"


function Home () {
const auth = useSelector (state => state.UserReducer.auth)
const dispatch=useDispatch()


    return <div>
 <Navbar bg="primary" variant="dark">
    <Container>
 
    {/* <Navbar.Brand href="#">Hello</Navbar.Brand> */}
    <Nav className="me-auto" style={{display:"flex",flexWrap:"wrap"}}>
    {auth ?   <div>
      <Nav.Link  as={Link} to="/">Home</Nav.Link>
      <Nav.Link  as={Link} to="/doctors"   onClick={()=> dispatch(getdoctors())}   >List of Doctors </Nav.Link>
      <Nav.Link   as={Link}  to="/Profile" >My Profile</Nav.Link> 
      <Nav.Link   as={Link}  to="/"     onClick={()=>dispatch(logout())} >Log out</Nav.Link>
      

    
       </div> : <div> 
       <Nav.Link as={Link} to="/">Home</Nav.Link>

       <Nav.Link  as={Link} to="/SignUp">Sign_Up</Nav.Link> 
      <Nav.Link  as={Link} to="/SignIn">Sign_In</Nav.Link> 
  
    
       </div>  }
    
      
 
    </Nav>
    </Container>
  </Navbar>
  </div>
}
export default Home