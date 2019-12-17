import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';



import Home from './components/Menu/Home'
import About from './components/Menu/About'
import TourList from './components/TourList';
import Contact from './components/Menu/Contact';

function App() {
  return (
   <Router>
   
    <Navbar />
    {/* <TourList /> */}
    <Route exact path = {'/'} component = {Home} />
    <Route exact path = {'/about'} component = {About} />
    <Route exact path = {'/tours'} component = {TourList} />
    <Route exact path = {'/contact'} component = {Contact} />
 
    </Router>
  );
}

export default App;
