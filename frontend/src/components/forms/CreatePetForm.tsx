import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { createPet } from '../../services/fetchPetsAPI';

interface FormData {
  name: string;
  age: string;
  type: string;
  breed: string;
  owner: string;
  ownerPhone: string;
}

export default function CreatePetForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    type: '',
    breed: '',
    owner: '',
    ownerPhone: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement |
    HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    const ageNumber = parseInt(formData.age, 10);
    const petData = {
      ...formData,
      age: ageNumber,
    };
    await createPet(petData);
    setFormData({
      name: '',
      age: '',
      type: '',
      breed: '',
      owner: '',
      ownerPhone: '',
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Cadastre seu Pet!
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>Nome do Pet</FormLabel>
                  <Input
                    value={formData.name}
                    type="text"
                    id="name"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel id="type">Seu Pet é?</FormLabel>
                  <Select 
                    placeholder='Tipo de Pet'
                    value={formData.type}
                    id="type"
                    onChange={handleChange}
                  >
                    <option value="DOG">Cachorro</option>
                    <option value="CAT">Gato</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="breed" isRequired>
                  <FormLabel>Raça do Pet</FormLabel>
                  <Input
                    value={formData.breed}
                    type="text"
                    id="breed"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel>Idade do Pet</FormLabel>
                  <Input
                    value={formData.age}
                    type="text"
                    id="age"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="owner" isRequired>
              <FormLabel>Nome do Tutor</FormLabel>
              <Input
                value={formData.owner}
                type="text"
                id="owner"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="ownerPhone" isRequired>
              <FormLabel>Contato do Tutor</FormLabel>
              <Input
                value={formData.ownerPhone}
                type="text"
                id="ownerPhone"
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => {
                  void handleSubmit();
                }}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Cadastrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}