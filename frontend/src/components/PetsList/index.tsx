import { useEffect, useState } from "react";

import PetItem from "../PetItem";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

import { Pet } from "../../types";

const PetsList = () => {
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

  return (
    <Container>
      <h1>Lista de Pets</h1>
      <Content>
        {pets.map((pet) => {
          return <PetItem key={pet.id} pet={pet}></PetItem>;
        })}
      </Content>
    </Container>
  );
};

export default PetsList;
