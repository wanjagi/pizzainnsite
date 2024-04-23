
import './App.css';
import Navbar from './components/Navbar';
import Home from './ pages/Home';
import Menu from './ pages/Menu';
import About from './ pages/About';
import Contact from './ pages/Contact';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='menu' element={<Menu />} exact />
          <Route path='about' element={<About />} exact />
          <Route path='contact' element={<Contact />} exact />

        </Routes>  
        


          
        
        
      </Router>
      
    </div>
  );
}

export default App;
