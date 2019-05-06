import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home/Home';
import SignIn from './Components/Auth/SignIn';
import NewForm from './Components/Home/Dashboard/NewForm/NewForm'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {Home}></Route>
        <Route path='/signin' component = {SignIn}></Route>
        <Route path='/newform' component = {NewForm}></Route>
      </Switch>
    </div>
  );
}

export default App;
