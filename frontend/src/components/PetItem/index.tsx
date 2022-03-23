import { Container, ContentRow, ContentItem } from "./styles";

import { Pet } from "../../types";

interface PetItemProps {
  pet: Pet;
  startEditing: (pet_id: number) => void;
}

const PetItem = ({ pet, startEditing }: PetItemProps) => {
  const handleEdit = () => {
    startEditing(pet.id);
  };
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
        <button className="edit" onClick={handleEdit}>
          Editar
        </button>
        <button className="delete">Deletar</button>
        <button className="details">Detalhes</button>
      </ContentRow>
    </Container>
  );
};

export default PetItem;
