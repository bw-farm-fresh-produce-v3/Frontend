import React from 'react';
import {Route, Switch} from 'react-router-dom';

// component imports
import RegisterForm from './components/RegisterForm';
import SignInForm from './components/SignInForm';
import NavBar from './components/NavBar';
// style imports
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <NavBar />
=======
        <h1>App is Running</h1>
>>>>>>> b1c5b6799fe59e325bf5053f8dfdec1a6257acd9
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
