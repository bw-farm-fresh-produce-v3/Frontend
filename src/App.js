import React from 'react';
import {Route, Switch} from 'react-router-dom';

// component imports
import CreateAcc from './components/CreateAcc';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FarmList from './components/FarmList';
import ProduceList from './components/ProduceList';

// style imports
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/register'>
          <CreateAcc />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path="/farms">
          <FarmList />
        </Route>
        <Route path="/produce">
          <ProduceList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
