import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Pages/About'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

const [styling, setStyle] = useState('light')

function changeMode(){
    if(styling === 'light'){
        setStyle("dark")
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
    else{
        setStyle('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={styling} changeMode={changeMode} />
    <Routes>
    <Route exact path='/about' element={
    <div className='container d-flex justify-content-center my-5'>
    <About mode={styling}/>
    </div>} />
    
    <Route exact path='/' element={<div className="container my-4">
        <Form heading="Enter Your Text To Analyse"  mode={styling}/>
        </div>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
