import { Container, ContentRow, ContentItem } from "./styles";

import { Pet } from "../../types";

interface PetItemProps {
  pet: Pet;
}

const PetItem = ({ pet }: PetItemProps) => {
  return (
    <Container>
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

      <ContentRow>
        <a className="edit" href="">
          Editar
        </a>
        <a className="delete" href="">
          Deletar
        </a>
        <a className="details" href="">
          Detalhes
        </a>
      </ContentRow>
    </Container>
  );
};

export default PetItem;
