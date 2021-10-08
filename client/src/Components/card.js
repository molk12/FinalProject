import { Link } from "react-router-dom"
import {Button} from "react-bootstrap"

function Card ({el}) {
    return (
        <div>
           <div class="container">
  <div class="card">
    <div class="card-header">
      <img src="https://image.freepik.com/vecteurs-libre/equipe-professionnels-sante_52683-36023.jpg" alt="rover" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">{el.speciality}</span>
      <h4>
        {el.name}
      </h4>
      <p>
     {el.phone_number} 
      </p>
      <div class="user">
        <img src="https://image.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg" alt="user" />
        <div class="user-info">
          <h5>{el.email}</h5>
        
        </div>
      </div>
     
      <Link to=  {`/Rdv/${el._id}`}>  <Button variant="info"> Make An Appointment </Button></Link>
      
    </div>
  </div>
</div> 
        </div>
    )
}
export default Card 