
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Section  from './component/Section';
import Footer from './component/Footer';
import Home from './component/Home';
import {Routes,Route,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
     <div className="Navbar">
      
      
     </div>

    </>
  );
}


export default App;
