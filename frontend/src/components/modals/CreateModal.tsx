import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FaRegPlusSquare } from 'react-icons/fa';
import CreatePetForm from '../forms/CreatePetForm';

export default function CreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}
        colorScheme='teal'
        variant="solid"
        leftIcon={<FaRegPlusSquare />}
        fontWeight='bold'
        fontSize='md'
        textTransform='uppercase'
        width='100%'
      >
        Cadastrar Pet
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent minW={'70vh'}>
          <ModalHeader>Cadastre Seu Pet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreatePetForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}