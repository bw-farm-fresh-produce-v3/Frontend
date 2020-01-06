import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

// component imports
import RegisterForm from './components/RegisterForm';
import SignInForm from './components/SignInForm';

// style imports
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/register-form'>
          <RegisterForm />
        </Route>
        <Route exact path='/sign-in'>
          <SignInForm />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
