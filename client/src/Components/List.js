import Card from './card'
import { useSelector } from "react-redux"


function List () {
const doctors=useSelector(state=>state.UserReducer.doctors)

    return (
<div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}  >
     {  doctors&& doctors.map(el=> <Card  el={el}  /> )}
</div>
    )
}
export default List