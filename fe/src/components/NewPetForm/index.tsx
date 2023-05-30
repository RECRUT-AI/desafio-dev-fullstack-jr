import React, { useState, useContext, ChangeEvent } from 'react';
import PetContext from '../../contexts/PetContext';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Button
} from './styles';
import { api } from '../../services/api';

interface FormData {
  petsName: string;
  animalType: string;
  age: number | null;
  owner: {
    name: string;
    phone: string;
  };
  race: string;
}

interface NewPetFormProps {
  onCloseModal: () => void;
}

export function NewPetForm({ onCloseModal }: NewPetFormProps) {
  const { addPet } = useContext(PetContext);

  const [formData, setFormData] = useState<FormData>({
    petsName: '',
    animalType: '',
    age: null,
    owner: {
      name: '',
      phone: ''
    },
    race: ''
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = event.target;

    if (id === 'age') {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value !== '' ? Number(value) : null
      }));
    } else if (id === 'ownerName' || id === 'ownerPhone') {
      setFormData((prevData) => ({
        ...prevData,
        owner: {
          ...prevData.owner,
          [id === 'ownerName' ? 'name' : 'phone']: value
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value
      }));
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post('pets', formData);
      const newPet = response.data;
      addPet(newPet);

      setFormData({
        petsName: '',
        animalType: '',
        age: null,
        owner: {
          name: '',
          phone: ''
        },
        race: ''
      });

      onCloseModal()
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="petsName">Name:</Label>
        <Input type="text" id="petsName" value={formData.petsName} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="animalType">Animal:</Label>
        <Select id="animalType" value={formData.animalType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="DOG">Dog</option>
          <option value="CAT">Cat</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="age">Age:</Label>
        <Input type="number" id="age" value={formData.age !== null ? formData.age : ''} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="ownerName">Owner Name:</Label>
        <Input type="text" id="ownerName" value={formData.owner.name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="ownerPhone">Owner Phone:</Label>
        <Input type="text" id="ownerPhone" value={formData.owner.phone} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="race">Race:</Label>
        <Input type="text" id="race" value={formData.race} onChange={handleChange} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
