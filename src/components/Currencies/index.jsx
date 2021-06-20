import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';

const Currencies = (props) => {

  const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
  
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
              id='dropdown-basic' >
            {selectedCurrency}</Dropdown.Toggle>
            <Dropdown.Menu value={selectedCurrency} onChange={onChangeCurrency}>
              {currencyOptions.map(option =>(<Dropdown.Item key={uuidv4()} value={option}>{option}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Currencies;
