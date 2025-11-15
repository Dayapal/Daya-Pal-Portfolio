// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    
      <Router>
        <div className="bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          
          <Experience />
          <Contact />
          <Footer />
        </div>
      </Router>
   
  );
}

export default App;