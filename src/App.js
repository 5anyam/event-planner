import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import Home from './Home'
import Login from './Login.js'
import Search from './Search.js'
import Signup from './Signup.js'
import Plans from './Plans.js'
import Planner from './Planner.js'

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route  path='/home' component={Home}/>
    <Route  path='/login' component={Login}/>
    <Route  path='/signup' component={Signup}/>
    <Route  path='/search' component={Search}/>
    <Route  path='/plans' component={Plans}/>
    <Route  path='/planner' component={Planner}/>
    </Switch>
   {/* <Header />
    <Home />
    <Login/>
    <Footer/>*/}

    {/*Home*/}
      {/*Header*/}
      {/*Banner*/}
      {/*Search*/}
      {/*Cards*/}
      {/*Footer*/}

    {/*Search Page*/}
      {/*Header*/}

    
    </div>
  );
}

export default App;
