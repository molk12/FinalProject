
import { useState } from 'react'
import {Form,Button , Col ,Row} from 'react-bootstrap'
import { addnewRdv } from '../Redux/Actions/RdvActions'
import {useDispatch} from "react-redux"
import { useHistory, useParams } from 'react-router-dom'
function Rdv() {
const [name,setname]=useState("")
const [Email,setEmail]=useState("")
const [Address,setAddress]=useState("")
const [number,setNumber]=useState("")
const [City,setCity]=useState("")
const [age,setage]=useState(0)
const [date,setDate]=useState("")
const dispatch=useDispatch()
const history=useHistory()

const {id}=useParams()

return (
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

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder=",Rue,Apartment, studio"    value={Address}    onChange={(e)=>setAddress(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control placeholder="12345.."     value={number}    onChange={(e)=>setNumber(e.target.value)} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control  placeholder="tunis ..."    value={City}    onChange={(e)=>setCity(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Date</Form.Label>
      <Form.Control placeholder="Choose..."     value={date}    onChange={(e)=>setDate(e.target.value)} />

   
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Age</Form.Label>
      <Form.Control      value={age}    onChange={(e)=>setage(e.target.value)} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit"    onClick={(e)=>{ e.preventDefault();   dispatch(addnewRdv({name, email:Email,date:date,phone_number:number, doc_id:id}));history.push('/doctors') }} >
  Send
  </Button>
</Form> 
   </div> 
)
}
export default Rdv