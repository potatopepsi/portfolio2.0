import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

import './App.css';

function App() {
 
  return (
    
    <Router>
          
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/exp' element={<Experience />} />
                <Route exact path='/contact' element={<Contact />} />

            </Routes>
        </Router>
  );
}

export default App;
