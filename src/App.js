
import './App.css';
import Navbar from './components/Navbar';
import Home from './ pages/Home';
import Menu from './ pages/Menu';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='menu' element={<Menu />} exact />
          

        </Routes>  
        


          
        
        
      </Router>
      
    </div>
  );
}

export default App;
