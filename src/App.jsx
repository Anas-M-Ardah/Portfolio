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
    try {
      ReactGA.initialize('G-7VT3WR0Y9P');
      
      // Send basic pageview
      ReactGA.send("pageview");
      
      // Send detailed pageview
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: document.title,
        location: window.location.href
      });
  
      // Send user timing
      ReactGA.send({
        hitType: "timing",
        timingCategory: "JS Dependencies",
        timingVar: "load",
        timingValue: 0
      });
  
    } catch (error) {
      console.error('GA4 Error:', error);
    }
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
