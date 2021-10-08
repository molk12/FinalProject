import {Card,Button} from "react-bootstrap"
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router"
import { deleteRdv, editrdv} from "../Redux/Actions/RdvActions"
import Edit from "./EditRdv"


function RdvCard ({el}) {
    const dispatch= useDispatch()
    const user = useSelector (state => state.UserReducer.user)
    const history=useHistory()
    
    return (
        <div >
<Card style={{ width: '18rem' ,display:"flex",flexWrap:"wrap" }}>
  <Card.Body>
  <h5> Name :</h5>
    <Card.Title>{el.name}</Card.Title>
    <h5> Date :</h5>
    <Card.Subtitle className="mb-2 text-muted"> {el.date}</Card.Subtitle>
    <h5>Phone_Number: </h5>
    <Card.Subtitle  className="mb-2 text-muted">  {el.phone_number} </Card.Subtitle>

    <Card.Text>
    {el.message}
    </Card.Text>


    {(user && user.role=="professionnel") ? 
     <div>  <Button variant="info">Accepter et Appeler</Button> 
     <Button variant="info" onClick={()=> dispatch(deleteRdv(el._id))} >Delete</Button> </div>:

      (user && user.role=="patient") &&
      // <div>   <Link  to ={`/EditRdv/${el._id}`}> <Button variant="info" >Edit my Rdv</Button> </Link> <Button variant="info"  onClick={()=> dispatch(deleteRdv(el._id))}>Delete</Button> </div>}
      <div> 
        <Edit  el={el}/> 
 
        <Button variant="danger"   onClick={()=> dispatch(deleteRdv(el._id))}>Delete</Button>
      </div>

      }
   
  </Card.Body>
</Card>
        </div>
    )
}
export default RdvCard