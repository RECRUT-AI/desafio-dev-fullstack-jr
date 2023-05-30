import { X } from "@phosphor-icons/react";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "./styles";
import { useTheme } from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { NewPetForm } from "../NewPetForm";

interface CreatePetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePetModal({ isOpen, onClose }: CreatePetModalProps) {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const theme = useTheme();
  
  const onCloseModal = useCallback(() => {
    setModalOpen(false);
    onClose();
  }, [onClose]);
  
  const handlePressEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onCloseModal();
    }
  }, [onCloseModal]);
  
  useEffect(() => {
    setModalOpen(isOpen);
  
    if (isOpen) {
      document.addEventListener('keydown', handlePressEsc);
    }
  
    return () => {
      document.removeEventListener('keydown', handlePressEsc);
    };
  }, [isOpen, handlePressEsc, onClose]);

  return (
    <>
      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={onCloseModal}>
              <X size={20} color={theme["gray-300"]} />
            </CloseButton>

            <NewPetForm onCloseModal={onCloseModal} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}



