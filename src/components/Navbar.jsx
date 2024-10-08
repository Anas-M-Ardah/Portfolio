import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {

  const linkedInLink = 'https://www.linkedin.com/in/anas-alardah';
  const emailLink = 'mailto:anas.m.ardah@gmail.com';
  const githubLink = 'https://github.com/Anas-M-Ardah';
  const resumeLink = 'https://drive.google.com/file/d/1sdRoNt6mOyP_8wxK1po4Nc3gxV0EAym2/view?usp=sharing'

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
           <div className='social-icon'>
            <a href={linkedInLink} target='_blank'><img src={navIcon1} alt="linkedIn Profile" /></a>
            <a href={githubLink} target='_blank' ><img src={navIcon2} alt="GitHub Profile" /></a>
            <a href={emailLink} ><img src={navIcon3} alt="Email" /></a>
           </div>
           <button className='vvd' onClick={() => window.open(resumeLink, '_blank')}><span>Download CV</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;