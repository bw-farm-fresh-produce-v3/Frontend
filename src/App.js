import React from 'react';
import {Route, Switch} from 'react-router-dom';

// component imports
import RegisterForm from './components/CreateAcc';
import Login from './components/Login';
import NavBar from './components/NavBar';

// style imports
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Switch>
        <Route exact path='/createacc'>
          <RegisterForm />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        
      </Switch> */}
    </div>
  );
}

export default App;
