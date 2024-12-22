import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img3.png";
import projImg3 from "../assets/img/project-img4.png";
import projImg4 from "../assets/img/project-img5.png";
import projImg5 from "../assets/img/project-img6.jpg";
import projImg6 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg7 from "../assets/img/final.jpg";
import projImg8 from "../assets/img/blog.png";
import projImg9 from "../assets/img/paintclone.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Backend System",
      description: "a backend system for an e-commerce website",
      imgUrl: projImg7,
      repoUrl: "https://github.com/Anas-M-Ardah/Ecommerce-Backend",
      liveUrl: "https://backend-final-2-m4zr.onrender.com/api-docs/",
    },
    {
      title: "Visit Petra",
      description: "Welcome to the Visit Petra project! This website is designed to provide a comprehensive guide to exploring Petra, the ancient city in Jordan.",
      imgUrl: projImg5,
      repoUrl: "https://github.com/Anas-M-Ardah/Visit-Petra",
      liveUrl: "https://anas-m-ardah.github.io/Visit-Petra/",
    },
    {
      title: "Joke Teller",
      description: "a fun app that fetches and tells jokes",
      imgUrl: projImg1,
      repoUrl: "https://github.com/Anas-M-Ardah/joke-teller",
      liveUrl: "https://anas-m-ardah.github.io/Joke-Teller/",
    },
    {
      title: "Simon Says",
      description: "a fun game that tests your memory",
      imgUrl: projImg2,
      repoUrl: "https://github.com/Anas-M-Ardah/Simon-Says",
      liveUrl: "https://anas-m-ardah.github.io/Simon-Says/",
    },
    {
      title: "Jordan Dental Care",
      description: "a web application that provides a solution to the problem of dental appointments",
      imgUrl: projImg3,
      repoUrl: "https://github.com/Anas-M-Ardah/Jordan-Dental-Care",
      liveUrl: "https://drive.google.com/drive/u/1/folders/1IWzkmPwSA78cPRgNTOD_kbR-IpHVeLjO",
    },
    {
      title: "NASA API Project",
      description: "a web application that fetches data from NASA's open API and displays them",
      imgUrl: projImg4,
      repoUrl: "https://github.com/Anas-M-Ardah/NASA-API-Pictures",
      liveUrl: "https://anas-m-ardah.github.io/NASA-API-Pictures/",
    },
    {
      title: "Calulator",
      description: "and of course the good old classic calculator",
      imgUrl: projImg6,
      repoUrl: "https://github.com/Anas-M-Ardah/Calculator",
      liveUrl: "https://anas-m-ardah.github.io/Calculator/",
    },
    {
      title: "Blogging Backend System",
      description: "a blogging backend system with authentication",
      imgUrl: projImg8,
      repoUrl: "https://github.com/SD-0924/anas-alardah-blogging-system-with-sequelize",
    },
    {
      title: "Paint Clone",
      description: "a clone of the popular paint app",
      imgUrl: projImg9,
      repoUrl: "https://github.com/Anas-M-Ardah/Paint-Clone",
      liveUrl: "https://anas-m-ardah.github.io/Paint-Clone/",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })

                        }       
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}