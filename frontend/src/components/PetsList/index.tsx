import { useEffect, useState } from "react";

import PetItem from "../PetItem";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

import { Pet } from "../../types";

interface PetsListProps {
  update: boolean;
  startEditing: (pet_id: number) => void;
}

const PetsList = ({ update, startEditing }: PetsListProps) => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function loadPets() {
      console.log("response.data");
      api.get("pets").then((response) => {
        console.log("response.data");
        setPets(response.data);
      });
    }

    loadPets();
  }, []);

  useEffect(() => {
    async function loadPets() {
      console.log("response.data");
      api.get("pets").then((response) => {
        console.log("response.data");
        setPets(response.data);
      });
    }

    loadPets();
  }, [update]);

  return (
    <Container>
      <h1>Lista de Pets</h1>
      {pets && (
        <Content>
          {pets.map((pet) => {
            return (
              <PetItem
                startEditing={startEditing}
                key={pet.id}
                pet={pet}
              ></PetItem>
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default PetsList;
