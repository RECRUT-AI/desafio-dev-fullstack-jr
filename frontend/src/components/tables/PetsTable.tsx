import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Center,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { useState } from 'react';
import { FilterList } from '../forms/FilterList';
import { SearchInput } from '../forms/SearchInput';
import { SearchIcon } from '@chakra-ui/icons';
import CreateModal from '../modals/CreateModal';
import { deletePet } from '../../services/fetchPetsAPI';
import { removeFromList } from '../../redux/reducers/petSlice';

export function PetsTable() {
  const dispatch = useAppDispatch();

  const petList = useAppSelector((
    state: RootState) => state.pets.arrayOfPets);

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  interface Pet {
    id: number;
    name: string;
    age: number;
    type: string;
    breed: string;
    owner: string;
    ownerPhone: string;
  }

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(target.value);
  };

  const handleFilterChange = (filterValue: string) => {
    setSelectedFilter(filterValue);
  };

  const filteredPets = selectedCategory
    ? petList.filter(pet => pet.type === selectedCategory)
    : petList;

  const sortFunctions = {
    'asc': (a: Pet, b: Pet) => a.name.localeCompare(b.name),
    'desc': (a: Pet, b: Pet) => b.name.localeCompare(a.name),
    'idade-asc': (a: Pet, b: Pet) => a.age - b.age,
    'idade-desc': (a: Pet, b: Pet) => b.age - a.age,
    'race-asc': (a: Pet, b: Pet) => a.breed.localeCompare(b.breed),
    'race-desc': (a: Pet, b: Pet) => b.breed.localeCompare(a.breed),
    'tutor-asc': (a: Pet, b: Pet) => a.owner.localeCompare(b.owner),
    'tutor-desc': (a: Pet, b: Pet) => b.owner.localeCompare(a.owner),
  };

  type SortType = keyof typeof sortFunctions;

  const petListWithFilters = filteredPets
    .filter(pet =>
      pet.name.toLowerCase().includes(searchText.toLowerCase()))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .sort(sortFunctions[selectedFilter as SortType] || ((a, b) => 0));

  const handleDelete = async (id: number) => {
    dispatch(removeFromList(id));
    await deletePet(id);
  };

  return (
    <div>
      <Center>
        <SimpleGrid
          minChildWidth='220px' pt='16px' spacing='10px'
          columns={3}
          maxW='80%'
        >
          <CreateModal />
          <FilterList onFilterChange={handleFilterChange} />
        </SimpleGrid>
      </Center>
      <SearchInput
        icon={<SearchIcon />}
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder='Buscar Pet'
      />
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
                petListWithFilters.map((pet) => (
                  <Tr key={pet.id}>
                    <Td>{pet.name}</Td>
                    <Td>{pet.age}</Td>
                    <Td>{pet.type}</Td>
                    <Td>{pet.breed}</Td>
                    <Td>{pet.owner}</Td>
                    <Td>{pet.ownerPhone}</Td>
                    <Td>
                      <IconButton
                        colorScheme="blue"
                        size="sm"
                        mr={2}
                        icon={<FiEdit />}
                        aria-label="editar pet"
                      />
                      <IconButton
                        colorScheme="red"
                        size="sm"
                        mr={2}
                        icon={<RiDeleteBin2Line />}
                        aria-label="deletar pet"
                        onClick={() => void handleDelete(pet.id)}
                      />
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}