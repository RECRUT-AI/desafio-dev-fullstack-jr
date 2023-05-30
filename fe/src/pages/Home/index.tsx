import { useEffect, useState, useContext } from 'react';
import { api } from '../../services/api.ts';
import { CreatePetModal } from '../../components/CreatePetModal/index.tsx';
import { PetCard } from '../../components/PetCard.tsx';
import { Container, Content, Header, Button } from './styles.ts';
import { Pet } from '../../@types/Pet.ts';

import PetContext from '../../contexts/PetContext'; 

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addPet, removePet } = useContext(PetContext);
  const [petsList, setPetsList] = useState<Pet[]>([]); 

  async function fetchPets() {
    await api.get('/pets')
      .then((res) => setPetsList(res.data));
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    fetchPets();
  }, [addPet, removePet]);

  async function handleDeletePet(id: string) {
    try {
      await api.delete(`/pets/${id}`);
      removePet(id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Container>
        <Header>
          <h1>
            Registered Pets: 
            <span>{petsList.length}</span>
          </h1>
          
          <Button onClick={handleOpenModal}>
            Add new pet
          </Button>
        </Header>

        <Content>
          {petsList.map((pet) => (
            <PetCard 
              _id={pet._id}
              key={pet._id}
              petsName={pet.petsName}
              age={pet.age}
              race={pet.race}
              animalType={pet.animalType}
              owner={pet.owner}
              onRemove={() => handleDeletePet(pet._id)} 
            />
          ))}
        </Content>
      
      </Container>
      
      <CreatePetModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
