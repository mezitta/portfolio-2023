import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectLeft = () => {
  return (
    <Container fluid className="project-container">
      <Row>
        <Col>Image</Col>
        <Col>Desc</Col>
      </Row>
    </Container>
  );
};

export default ProjectLeft;
