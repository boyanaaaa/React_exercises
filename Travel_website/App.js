
import './style.css';
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import Home from "../src/components/routes/Home"
import About from "../src/components/routes/About"
import Service from "../src/components/routes/Service"
import Contact from "../src/components/routes/Contact"


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Navbar />
        
    </div>
  );
}

export default App;
