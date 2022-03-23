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
      api
        .get("pets")
        .then((response) => {
          setPets(response.data);
        })
        .catch((response) => {
          setPets([]);
        });
    }

    loadPets();
  }, [update]);

  return (
    <Container>
      {pets.length > 0 ? (
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
      ) : (
        <h1>Nenhum pet cadastrado.</h1>
      )}
    </Container>
  );
};

export default PetsList;
