import './App.css';
import Navbar from './compenents/Navbar';
import Skills from './compenents/Skills';
import About from './compenents/About';
import Education from './compenents/Education';
import Projects from './compenents/Projects';
import Contact from './compenents/Contact';
import Footer from './compenents/Footer';

function App() {
  return (
   <div>
      <Navbar />
      <Skills />
      <Education />
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
