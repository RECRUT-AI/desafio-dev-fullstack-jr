import { Button } from '@chakra-ui/react';
import { FaRegPlusSquare } from 'react-icons/fa';


export function AddPetButton() {
  return (
    <Button
      colorScheme='teal'
      variant="solid"
      leftIcon={<FaRegPlusSquare />}
      fontWeight='bold'
      fontSize='md'
      textTransform='uppercase'
      width='100%'
    >
      Adicionar Pet
    </Button>
  );
}