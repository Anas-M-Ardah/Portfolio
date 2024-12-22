import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          style={{ maxHeight: '350px', minHeight: '350px' }}
          src={imgUrl}
          alt={`${title} thumbnail`}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {/* Render the GitHub Repo button only if repoUrl is provided */}
          {repoUrl && (
            <Button
              style={{ margin: '2%' }}
              variant="secondary"
              href={repoUrl}
              target="_blank"
            >
              <i className="fab fa-github"></i> Github Repo
            </Button>
          )}
          {/* Render the Live Demo button only if liveUrl is provided */}
          {liveUrl && (
            <Button
              style={{ margin: '2%' }}
              variant="secondary"
              href={liveUrl}
              target="_blank"
            >
              <i className="fas fa-external-link-alt"></i> Live Demo
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
};