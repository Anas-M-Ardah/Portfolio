import './App.css'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Footer} from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


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
