import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL }) => {
  return (
    <div>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgURL} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </div>
  );
};
