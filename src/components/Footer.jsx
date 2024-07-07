import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

    const linkedInLink = 'https://www.linkedin.com/in/anas-al-ardah-1b70b9271';
    const emailLink = 'mailto:anas.m.ardah@gmail.com';
    const githubLink = 'https://github.com/Anas-M-Ardah';

  return (
    <footer className="footer">
      <Container style={{padding: '5%'}}>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedInLink}><img src={navIcon1} alt="Icon" /></a>
              <a href={githubLink}><img src={navIcon2} alt="Icon" /></a>
              <a href={emailLink}><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}