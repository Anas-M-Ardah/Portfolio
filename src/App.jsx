import './App.css'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Footer} from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const initializeGA = () => {
      try {
        ReactGA.initialize('YOUR-MEASUREMENT-ID');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        
        // Test if GA is loaded
        if (window.ga && ga.create) {
          console.log('GA is properly loaded');
        } else {
          console.warn('GA might not be properly loaded');
        }
      } catch (error) {
        console.error('GA initialization error:', error);
      }
    };
  
    initializeGA();
  }, []);

  return (
    <>
     <NavBar />
     <Banner />
     <Skills />
     <Projects />
     <Footer />
    </>
  )
}

export default App
