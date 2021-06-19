import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Convert = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className='d-grid'>
              <Button variant='primary' size='lg'>
                Convert
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Convert;