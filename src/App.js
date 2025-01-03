import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Alert from '../src/components/Alert'
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';


function App() {

  // 👉 Add, This is copy form 'TextTutils'  #71...
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  
  return (
    <div className='app'>
    <NoteState >
      <Router>
        <Navbar />
        <Alert alert={alert}  />           
        <div className="container">
          <Routes>
            <Route exact path="/" element= { <Home showAlert={showAlert} />} > </Route>       
            <Route exact path="/about" element= { <About />} > </Route>
            <Route exact path="/login" element= { <Login showAlert={showAlert} />} > </Route>       
            <Route exact path="/signup" element= { <Signup showAlert={showAlert} />} > </Route>       
          </Routes>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
