import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectRight = () => {
  return (
    <Container fluid className="project-container">
      <Row>
        <Col>Desc</Col>
        <Col>Image</Col>
      </Row>
    </Container>
  );
};

export default ProjectRight;
