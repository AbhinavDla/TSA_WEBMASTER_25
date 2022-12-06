import './App.css';
import Navbar from './navbar/Navbar'
import Homepage from './homepage/Homepage'
import Menu from './menu/Menu'
import Reservations from './reservations/Reservations'
import Contact from './contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reservations" element={<Reservations />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
