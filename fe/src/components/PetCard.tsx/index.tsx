import { Cat, Dog, Pencil, Trash } from '@phosphor-icons/react'
import { 
  Container, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Title,
  Subtitle, 
  DeleteButton,
  Actions,
  EditButton
} from './styles'
import { Pet } from '../../@types/Pet'
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';
import { Link } from 'react-router-dom';

interface PetCardProps extends Pet {
  onRemove?: () => void;
  onEdit?: () => void;
}

export function PetCard({ _id, petsName, age, owner, race, animalType, onRemove, onEdit }: PetCardProps) {
  function formatAnimalType(animalType: string) {
    return animalType.charAt(0).toUpperCase() + animalType.slice(1).toLowerCase();
  }

  return (
    <Container>
      <CardHeader>
        <Title>{petsName}</Title>
        {animalType === 'DOG' ? <Dog size={32} /> : <Cat size={32} />}
      </CardHeader>

      <CardBody>
        <Subtitle>
          Animal type: 
          <span>{formatAnimalType(animalType)}</span>
        </Subtitle>

        <Subtitle>
          Race: 
          <span>{race}</span>
        </Subtitle>

        <Subtitle>
          Age: 
          <span>{age}</span>
        </Subtitle>
      </CardBody>

      <CardFooter>
        <div>
          <Subtitle> Owner:</Subtitle> 
          <span>
            {owner.name}
          </span>
        </div>

        <div>
          <Subtitle>Phone:</Subtitle> 
          <span>
            {formatPhoneNumber(owner.phone)}
          </span>
        </div>
      </CardFooter>

      <Actions>
        <DeleteButton onClick={onRemove}>
          <Trash size={22}  />
        </DeleteButton>
        
        <Link to={`edit/${_id}`}>
          <EditButton onClick={onEdit}>
            <Pencil size={22} />
          </EditButton>
        </Link>
      </Actions>

    </Container>
  )
}