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
      <div className="bg-gray-900 transition-colors duration-300 w-full overflow-x-hidden">
        <Navbar />
        
        {/* Make sure each section has proper ID and enough height */}
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;