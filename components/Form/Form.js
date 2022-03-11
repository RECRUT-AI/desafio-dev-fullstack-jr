import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { TextField, Button, Alert, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import handlers from '../../utils/handlers';
import Loading from '../Loading/Loading';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState(false); //cat = false or dog = true
  const [breed, setBreed] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const clearInputs = () => {
    setName('');
    setType(null);
    setBreed('');
    setAge('');
    setOwnerName('');
    setOwnerPhone('');
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleBreed = (e) => {
    setBreed(e.target.value);
  };

  const handlOwnerNameChange = (e) => {
    setOwnerName(e.target.value);
  };

  const handlOwnerPhoneChange = (e) => {
    setOwnerPhone(e.target.value);
  };

  const onButtonClick = () => {
    const pet = {
      name: name,
      age: age,
      isCat: type,
      isDog: !type,
      breed: breed,
      owner: {
        name: ownerName,
        telephone: ownerPhone
      }
    }
    setLoading(true);
    handlers.create(pet)
      .then(res => {
        console.log(res.data)
        setResponse(res);
        clearInputs();
        setLoading(false);
      })
      .catch(err => console.log(err));    
  }

  // {response && <Alert className='form__notification' variant="filled" severity="error">invalid form try again</Alert>}
  useEffect(() => {
    if (!!response === true) {
      setTimeout(() => setResponse(''), 5000);
    }

  }, [response]);

  return (
    <>
      <Row>
        <Col className='d-flex justify-content-center flex-column align-items-center'>
          <TextField
            margin="normal"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />  
          <TextField
            margin="normal"
            label="Idade"
            variant="outlined"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={age}
            onChange={handleAgeChange}
          />
          <FormControl fullWidth className='form'>
            <InputLabel id="simple-select-label">Tipo</InputLabel>
            <Select
              labelId="simple-select-label"
              value={type}
              label="Tipo"
              onChange={handleType}
            >
              <MenuItem value={false}>Gato</MenuItem>
              <MenuItem value={true}>Cachorro</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col className='d-flex justify-content-center flex-column align-items-center'>
          <TextField
            margin="normal"
            label="Raça"
            variant="outlined"
            value={breed}
            onChange={handleBreed}
          />
          <TextField
            margin="normal"
            label="Dono"
            variant="outlined"
            value={ownerName}
            onChange={handlOwnerNameChange}
          />
          <TextField
            margin="normal"
            label="Telefone do dono"
            variant="outlined"
            value={ownerPhone}
            onChange={handlOwnerPhoneChange}
          />
        </Col>
        
      </Row>
      <Row className='d-flex justify-content-center flex-column align-items-center'>
        {loading && <Loading />}
        {response && (
          <Alert
            className='form__notification'
            variant="filled"
            severity={response?.error ? "error" : "success"}
          >
            {response?.error ? response.error : "Pet adicionado com sucesso!"}
          </Alert>
          )}
        <Button onClick={onButtonClick} variant="contained">Registrar</Button>
      </Row>
    </>
  )
};

export default Form;
