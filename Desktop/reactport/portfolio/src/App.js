import Loader from './component/Loader';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Section  from './component/Section';
import Footer from './component/Footer';
import Home from './component/Home';
import Skills from './component/Skills';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Contact from './component/Contact';

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
     <div className="Navbar">
      
      
     </div>

    </>
  );
}


export default App;
