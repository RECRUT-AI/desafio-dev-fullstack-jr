import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import handlers from '../utils/handlers';
import { Button } from '@mui/material';
import Clientsdisplay from '../components/Clientsdisplay/Clientsdisplay';

const List = () => {
  
  return (
    <Container fluid className='h-100'>
      <Row className='h-100'>
        <Col className='h-100 d-flex justify-content-center align-items-center'>
          <Container className='h-75 rounded mainContent d-flex flex-column align-items-center justify-content-between p-5' >
            <Button href='/' className='button--back' variant="contained">Voltar</Button>
            <Row>
              <h1>Nossos pets!</h1>
            </Row>
            <Clientsdisplay />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default List;