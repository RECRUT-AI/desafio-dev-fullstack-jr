import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, Box, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import handlers from '../../utils/handlers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ClientModal = ({ client }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = useState(client?.age || '');
  const [type, setType] = useState(client?.isCat || false); //cat = false or dog = true
  const [breed, setBreed] = useState(client?.breed || '');
  const [ownerName, setOwnerName] = useState(client?.owner?.name || '');
  const [ownerPhone, setOwnerPhone] = useState(client?.owner?.telephone || '');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const onUpdate = () => {
    setLoading(true);
    handlers.update(client?.name || '', {
      age,
      isCat: type,
      isDog: !type,
      breed,
      owner: {
        name: ownerName,
        telephone: ownerPhone
      }
    })
    .then(res => {
      setResponse(res.data);
      setOpen(false);
      console.log(res);
    })
    .catch(err => {
      setResponse(err);
    });
  }

  const onDelete = () => {
    handlers.remove(client.name)
      .then(res => {
        setOpen(false);
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Button size="small" variant="contained" color="secondary" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display='flex' flexDirection='column'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Oi, ${client?.name || 'pet'}`}
          </Typography>
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
          <Button variant="contained" color="secondary" onClick={onUpdate}>Atualizar cadastro</Button>
          <Button variant="contained" color="error" onClick={onDelete}>Delete records</Button>
        </Box>
      </Modal>
    </>
  );
}

export default ClientModal;