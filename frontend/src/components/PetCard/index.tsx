import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Pet } from "../../types";
import { Container, ContentItem, ContentRow } from "./styles";

interface PetItemProps {
  petId: number;
}

const PetCard = ({ petId }: PetItemProps) => {
  const [pet, setPet] = useState<Pet>();

  useEffect(() => {
    async function loadPet() {
      api.get(`pets/${petId}`).then((response) => {
        setPet(response.data);
      });
    }

    loadPet();
  }, [petId]);

  return (
    <Container>
      <h2>Detalhes do pet</h2>
      {pet !== undefined && (
        <>
          <ContentRow>
            <ContentItem>
              <span className="title">Nome: </span>
              {pet.name}
            </ContentItem>
            <ContentItem>
              <span className="title">Idade:</span> {pet.age}
            </ContentItem>
          </ContentRow>
          <ContentRow>
            <ContentItem>
              <span className="title">Tipo: </span>
              {pet.type}
            </ContentItem>
            <ContentItem>
              <span className="title">Raça: </span>
              {pet.breed}
            </ContentItem>
          </ContentRow>
          <ContentRow>
            <ContentItem>
              <span className="title">Tutor:</span> {pet.tutorName}
            </ContentItem>
            <ContentItem>
              <span className="title">Telefone do tutor:</span> {pet.tutorPhone}
            </ContentItem>
          </ContentRow>
        </>
      )}
    </Container>
  );
};

export default PetCard;
