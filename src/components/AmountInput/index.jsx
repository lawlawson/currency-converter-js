import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { BsArrowLeftRight } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AmountInput = (props) => {
  const { amount, setAmount } = props;
  return (
    <Container fluid>
      <p>
        <strong>Amount</strong>
      </p>
      <Row>
        <Col xs={11}>
          <InputGroup className='mb-3' value={amount} onChange={(event) => setAmount(event.target.value)} >
            <FormControl
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
            />
          </InputGroup>
        </Col>
        <Col xs={1}>
          <BsArrowLeftRight
            size={40}
            style={{ cursor: 'pointer' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AmountInput;
