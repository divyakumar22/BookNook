
import './App.css';
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route,Routes,Link  } from 'react-router-dom';

function App() {
  return (
    <>
   <Navbar/>
   <Router>
    <Routes>
      <Route exact path='/Home' Component={Home}/>
      <Route exact path='/Login' Component={Login}/>
      <Route exact path='/Signup' Component={Signup}/>
      <Route exact path='/Aboutus' Component={Aboutus}/>
    </Routes>
   </Router>
   
    </>
  );
}

export default App;
