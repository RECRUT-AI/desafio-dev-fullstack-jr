import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LandingPageCard from '../components/LandingPageCard/LandingPageCard';

const Home = () => {
  return (
    <Container fluid className='h-100'>
      <Row className='h-100'>
        <Col className='h-100 d-flex justify-content-center align-items-center'>
          <Container className='h-75 rounded mainContent d-flex flex-column justify-content-evenly'>
            <Row>
              <main className='d-flex justify-content-center flex-column align-items-center'>
                <h1 className='m-2'>🐈Bem-vindo ao petshop🐕</h1>
                <p className='m-1'>Aqui você pode ver registrar novos clientes, lista-los, atualizar cadastro e deleta-los também!</p>
              </main>
            </Row>
            <Row>
              <Container className='d-flex justify-content-evenly'>
                <LandingPageCard
                  title='List'
                  text="listagem dos nossos pets clients!"
                  subText="Veja nossos fofos"
                  href='/list'
                />
                <LandingPageCard
                  title='Register'
                  text="Registre um novo pet"
                  subText="Gato ou cachorro?"
                  href='/register'
                />
              </Container>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
