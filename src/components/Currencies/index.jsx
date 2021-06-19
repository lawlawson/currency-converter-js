import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Currencies = () => {

  return (
    <Container fluid>
      <Row>
        <Col xs={1}>
          <img
            src='https://www.countryflags.io/be/flat/64.png'
            alt='Country flag'
          />
        </Col>
        <Col xs={11}>
          <Dropdown className='ms-5'>
            <Dropdown.Toggle
              variant='light'
              id='dropdown-basic'>
              This is where dynamic info goes
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Currencies;
