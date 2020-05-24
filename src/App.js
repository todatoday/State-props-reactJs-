import React from 'react';
 import Footer from './components/Footer';
 import NavBar from './components/NavBar';
 import ProfilList from './components/ProfilList';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import Errors from './components/Errors';
import './App.css';
import ListTest from './components/ListTest';
 import Forms from './components/Forms';
 import Body from './components/Body';

function App() {
  return (
    <div>
  
    
     <Router>
      <NavBar />
      <div>

      <Switch>
        
      <Route path = "/" component = { Body } exact/>
      <Route path = "/forms" component = { Forms}/>
      <Route path = "/profilList" component = { ProfilList}/>
      <Route path = "/addProfil" component = { ListTest}/>
      <Route component={Errors}/>
        
      </Switch>
      </div>
      </Router>
      <Footer/> 

</div>
  );
}

export default App;
