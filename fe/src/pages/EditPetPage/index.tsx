import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Input, FormGroup, Select, Button, Label } from "./styles";

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

export function EditPetPage() {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<FormData>({
    petsName: "",
    animalType: "",
    age: null,
    owner: {
      name: "",
      phone: "",
    },
    race: "",
  });

  const fetchPetData = useCallback(async () => {
    try {
      const response = await api.get(`pets/${id}`);
      const petData = response.data;
      setFormData({
        petsName: petData.petsName,
        animalType: petData.animalType,
        age: petData.age,
        owner: {
          name: petData.owner.name,
          phone: petData.owner.phone,
        },
        race: petData.race,
      });
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchPetData();
  }, [fetchPetData]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;

    if (id === "age") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value !== "" ? Number(value) : null,
      }));
    } else if (id === "ownerName" || id === "ownerPhone") {
      setFormData((prevData) => ({
        ...prevData,
        owner: {
          ...prevData.owner,
          [id === "ownerName" ? "name" : "phone"]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.put(`pets/${id}`, formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Edit Pet</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="petsName">Name:</Label>
          <Input
            type="text"
            id="petsName"
            name="petsName"
            value={formData.petsName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="animalType">Animal:</Label>
          <Select
            id="animalType"
            name="animalType"
            value={formData.animalType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="DOG">Dog</option>
            <option value="CAT">Cat</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Age:</Label>
          <Input
            type="number"
            id="age"
            name="age"
            value={formData.age !== null ? String(formData.age) : ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ownerName">Owner Name:</Label>
          <Input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.owner.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ownerPhone">Owner Phone:</Label>
          <Input
            type="text"
            id="ownerPhone"
            maxLength={11}
            name="ownerPhone"
            value={formData.owner.phone}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="race">Race:</Label>
          <Input
            type="text"
            id="race"
            name="race"
            value={formData.race}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Edit</Button>
      </form>
    </Container>
  );
}
