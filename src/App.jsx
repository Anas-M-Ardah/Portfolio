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
    // Initialize Google Analytics
    ReactGA.initialize('G-7VT3WR0Y9P');
    // Send pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
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
