import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{maxHeight: '350px'}} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
            <Button style={{margin: '2%'}} variant="secondary" href={repoUrl} target="_blank"><i className="fab fa-github"></i>Github Repo</Button>
            <Button style={{margin: '2%'}} variant="secondary" href={liveUrl} target="_blank"><i className="fab fa-github"></i>Live Demo</Button>
        </div>
      </div>
    </Col>
  )
}