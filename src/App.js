import './App.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { addingNumbers } from './services/DataServices.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  //state Variable function  hook(use state)
  const [count, setCount] = useState(432);

  //this state variable is a string because its initial value is "" an empty string
  const [inputField, setInputField] = useState('');

  //whateever is in useState parenthesis

  const clickFunction = () => {
    setCount(count + 1)
  }

  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState("");

  const getResult = async () => {
    const response = await addingNumbers(numOne, numTwo);
    setResult(response)
  }

  return (
    <>
      <Button variant="primary" onClick={() => clickFunction()}>Iterate</Button>{' '}
      <p>{count}</p>


      <input onKeyDown={(e) => e.key === 'Enter' ? setInputField(e.target.value) : null}></input>
      <p>{inputField}</p>

      <Row>
        <Col lg={6} className='d-flex justify-content-center'>
          <input onChange={e => setNumOne(e.target.value)}></input>
        </Col>
        <Col lg={6} className='d-flex justify-content-center'>
          <input onChange={(e) => setNumTwo(e.target.value)}></input>
        </Col>

      </Row>

      <Row>
        <Col lg={12} className='d-flex justify-content-center'>
          <Button variant="primary" onClick={() => getResult()}>Get Results</Button>{' '}
        </Col>
      </Row>
      <p className='text-center'>{result}</p>


    </>
  );
}

export default App;
