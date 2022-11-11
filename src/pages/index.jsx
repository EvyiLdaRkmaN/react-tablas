import React, { useState } from 'react'
import H1 from '../components/display/h1';
import H2 from '../components/display/H2';
import Table from '../components/table';
import Row from '../components/table/Row';

const Home = () => {

  const [numero, setNumero] = useState(1);

  const handleChangeNumber = () =>{
    if (numero < 10) setNumero(numero+1);
  }
  return (
    <center>
      <H1>Tablas de multiplicar</H1>
      <H2>{numero}</H2>
      <button onClick={handleChangeNumber}>siguiente</button>
      <br />
      <Table>
        <tbody>
          <Row position={1} number={numero}/>
          <Row position={2} number={numero}/>
          <Row position={3} number={numero}/>
          <Row position={4} number={numero}/>
          <Row position={5} number={numero}/>
          <Row position={6} number={numero}/>
          <Row position={7} number={numero}/>
          <Row position={8} number={numero}/>
          <Row position={9} number={numero}/>
          <Row position={10} number={numero}/>
        </tbody>
      </Table>
    </center>
  )
}

export default Home;
