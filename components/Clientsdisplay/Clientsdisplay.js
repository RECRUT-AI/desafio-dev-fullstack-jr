import React, { useEffect, useState } from 'react';
import handlers from '../../utils/handlers';
import ClientCard from '../ClientCard/ClientCard';
import { Row } from 'react-bootstrap';

const Clientsdisplay = () => {
  const [pets, setPets] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    handlers.getAll()
      .then(res => {
        setPets(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  
  return(
    <Row className="overflow-auto">
      {pets && pets.map(pet => {
        return <ClientCard client={pet} key={pet?.id} />
      })}
      {loading && <p>Loading...</p>}
    </Row>
  );
};

export default Clientsdisplay;