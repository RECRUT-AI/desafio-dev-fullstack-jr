import { useEffect, useState } from "react";

import PetItem from "../PetItem";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

import { Pet } from "../../types";

interface PetsListProps {
  update: boolean;
  startEditing: (pet_id: number) => void;
  openDetail: (pet_id: number) => void;
  deleteItem: (pet_id: number) => void;
}

const PetsList = ({
  update,
  startEditing,
  openDetail,
  deleteItem,
}: PetsListProps) => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function loadPets() {
      api.get("pets").then((response) => {
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
              <>
                <PetItem
                  startEditing={startEditing}
                  openDetail={openDetail}
                  deleteItem={deleteItem}
                  key={pet.id}
                  pet={pet}
                />
              </>
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default PetsList;
