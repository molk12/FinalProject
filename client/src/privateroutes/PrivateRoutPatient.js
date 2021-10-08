import React from 'react'
import {Route,Redirect} from 'react-router-dom'


function PrivateRoute({component,...rest}) {

  
const token=localStorage.getItem('token')

    return (
        <div>
            {token ?   <Route component={component}  {...rest} /> :<Redirect to='SingIn'  />  }
          
        </div>
    )
}

export default PrivateRoute