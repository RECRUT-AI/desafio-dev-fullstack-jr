import { Container, ContentRow, ContentItem } from "./styles";

import { Pet } from "../../types";

interface PetItemProps {
  pet: Pet;
  startEditing: (pet_id: number) => void;
  openDetail: (pet_id: number) => void;
  deleteItem: (pet_id: number) => void;
}

const PetItem = ({
  pet,
  startEditing,
  openDetail,
  deleteItem,
}: PetItemProps) => {
  const handleEdit = () => {
    startEditing(pet.id);
  };

  const handleDetailView = () => {
    openDetail(pet.id);
  };

  const handleDelete = () => {
    deleteItem(pet.id);
  };
  return (
    <Container>
      <ContentRow>
        <ContentItem>
          <span className="title">Nome: </span>
          {pet.name}
        </ContentItem>
      </ContentRow>
      <ContentRow>
        <ContentItem>
          <span className="title">Tipo: </span>
          {pet.type}
        </ContentItem>
      </ContentRow>
      <ContentRow>
        <ContentItem>
          <span className="title">Tutor:</span> {pet.tutorName}
        </ContentItem>
      </ContentRow>

      <ContentItem>
        <button className="edit" onClick={handleEdit}>
          Editar
        </button>
        <button className="delete" onClick={handleDelete}>
          Deletar
        </button>
        <button className="details" onClick={handleDetailView}>
          Detalhes
        </button>
      </ContentItem>
    </Container>
  );
};

export default PetItem;
