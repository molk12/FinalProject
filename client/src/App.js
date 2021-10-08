
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Acceuil from './Components/Home';
import Navbar from './Components/NavBar';

import Profil from './Components/Profile';
import Rdv from './Components/Rdv';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import Rdv from './Components/Rdv';
import { current } from './Redux/Actions/UserAction'
import Register from './Components/Register';
import PrivateRoute from './privateroutes/PrivateRoute';
import List from './Components/List';

import Edit from './Components/EditRdv';
import Footer from './Components/footer';


function App() {
  const dispatch= useDispatch()
  useEffect ( () => {
    if(localStorage.getItem('token')){
      dispatch(current())
    }
    },[] )
  return (
    <div className="App">
<Navbar />

  
   <Switch>
   <Route exact path='/' component={Acceuil} />
   
  <Route  path='(/SignUp|/SignIn)' component={Register} /> 
   <PrivateRoute  path='/Profile' component={Profil}/>
   <PrivateRoute path='/doctors' component={List}/>
  
   <PrivateRoute path='/EditRdv/:id' component={Edit} />
 <Route path='/Rdv/:id' component={Rdv}  />
 <Footer />
   </Switch> 
   <Footer />
    </div>
  );
}

export default App;
