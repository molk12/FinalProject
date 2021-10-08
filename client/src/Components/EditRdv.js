import { Col,Form,Row,Button,Modal } from "react-bootstrap";
import {useDispatch} from  "react-redux"
import { useState } from 'react';
import { editrdv } from "../Redux/Actions/RdvActions";
import {useSelector} from "react-redux"


function Edit({el}) {


  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


   console.log(el)


const [name,setname]=useState(el.name)
const [Email,setEmail]=useState(el.email)
const [date,setDate]=useState(el.date)
const [number,setNumber]=useState(el.number)

const Rdvs=useSelector(state=>state.RdvReducer.Rdvs)

// useEffect(()=>{
      
//   setname(el.name);setEmail(Rdvs.Email);setage(el.age);setAddress(Rdvs.Address);setNumber(el.Number);setCity(el.City);setDate(el.date)}
   
  
// ,[Rdvs])

const dispatch=useDispatch()
   
    return (
      <>
      <Button variant="primary" onClick={handleShow}>
        Edit My Rdv
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>



        <div>
      <Form>
       <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridEmail">
           <Form.Label>Name</Form.Label>
           <Form.Control type="Name" placeholder="Enter UserName"   value={name}    onChange={(e)=>setname(e.target.value)}/>
         </Form.Group>
     
         <Form.Group as={Col} controlId="formGridPassword">
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" placeholder="enter your mail"     value={Email}    onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
       </Row>
     
       {/* <Form.Group className="mb-3" controlId="formGridAddress1">
         <Form.Label>Address</Form.Label>
         <Form.Control placeholder=",Rue,Apartment, studio"    value={Address}    onChange={(e)=>setAddress(e.target.value)} />
       </Form.Group> */}
     
        <Form.Group className="mb-3" controlId="formGridAddress2">
         <Form.Label>Phone Number</Form.Label>
         <Form.Control placeholder="12345.."     value={number}    onChange={(e)=>setNumber(e.target.value)} />
       </Form.Group> 
     
       <Row className="mb-3">
         {/* <Form.Group as={Col} controlId="formGridCity">
           <Form.Label>City</Form.Label>
           <Form.Control  placeholder="tunis ..."    value={City}    onChange={(e)=>setCity(e.target.value)}/>
         </Form.Group>  */}
     
         <Form.Group as={Col} controlId="formGridState">
           <Form.Label>Date</Form.Label>
           <Form.Control placeholder="Choose..."     value={date}    onChange={(e)=>setDate(e.target.value)} />
     
        
         </Form.Group>

         
     
         {/* <Form.Group as={Col} controlId="formGridZip">
           <Form.Label>Age</Form.Label>
           <Form.Control      value={age}    onChange={(e)=>setage(e.target.value)} />
         </Form.Group> */}
       </Row>
     
       <Form.Group className="mb-3" id="formGridCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
     
       {/* <Button variant="primary" type="submit"    onClick={(e)=>{ e.preventDefault();  dispatch(editrdv({name, email:Email,date:date},id))}} >
         Edit
       </Button> */}
     </Form> 
        </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"     onClick={()=>{dispatch(editrdv(el._id,{name:name,email:Email,date:date,phone_number:number}));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>  
    )
}
export default Edit