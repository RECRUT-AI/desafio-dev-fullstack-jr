import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
} from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';

export function PetsTable() {
  const petList = useAppSelector((
    state: RootState) => state.pets.arrayOfPets);

  return (
    <Box pt="5" display="flex" alignItems="center" justifyContent="center">
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Tabela de Pets</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Idade</Th>
              <Th>Tipo</Th>
              <Th>Raça</Th>
              <Th>Tutor</Th>
              <Th>Contato</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              petList.map((pet) => (
                <Tr key={pet.id}>
                  <Td>{pet.name}</Td>
                  <Td>{pet.age}</Td>
                  <Td>{pet.type}</Td>
                  <Td>{pet.breed}</Td>
                  <Td>{pet.owner}</Td>
                  <Td>{pet.ownerPhone}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      mr={2}
                    >
                      Editar
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                    >
                      Deletar
                    </Button>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}