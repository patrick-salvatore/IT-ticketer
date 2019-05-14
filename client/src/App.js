import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home/Home';
import SignIn from './Components/Auth/SignIn';
import NewForm from './Components/Forms/Containers/NewForm'
import Questionnaire from './Components/Forms/Containers/Questionnaire'
import Summary from './Components/Forms/Containers/Summary'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {Home}></Route>
        <Route path='/signin' component = {SignIn}></Route>
        <Route path='/newform' component = {NewForm}></Route>
        <Route path='/questionnaire' component = {Questionnaire}></Route>
        <Route path='/summary' component = {Summary}></Route>
      </Switch>
    </div>
  );
}

export default App;
