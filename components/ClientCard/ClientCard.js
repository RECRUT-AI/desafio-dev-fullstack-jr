import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import ClientModal from '../ClientModal/ClientModal';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ClientCard = ({ client }) => {
  const { name, age, isCat, breed, owner: { name: ownerName, telephone: ownerTelephone }} = client;
  
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`${age} anos `}{bull}{` ${isCat ? 'Gato(a)' : 'Cachorro(a)'} `}{bull}{`raça ${breed}`}
          </Typography>
          <Typography variant="body2">
            {`dono: ${ownerName}`}
            <br />
            {`telefone: ${ownerTelephone}`}
          </Typography>
        </CardContent>
        <CardActions>
          <ClientModal client={client} />
        </CardActions>
      </Card>
    </>
    
  );
};

export default ClientCard;
