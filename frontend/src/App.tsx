import { useState } from "react";
import AddPetForm from "./components/AddPetForm";
import EditPetForm from "./components/EditPetForm";

import PetsList from "./components/PetsList";
import Modal from "./components/Modal";
import GlobalStyles from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import PetCard from "./components/PetCard";
import { api } from "./services/api";

function App() {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [petId, setPetId] = useState(0);
  const [isDetail, setIsDetail] = useState(false);
  const [updatePets, setUpdatePets] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    if (isEditing) {
      setIsEditing(false);
    }

    if (isDetail) {
      setIsDetail(false);
    }

    setShow(false);
    setUpdatePets(!updatePets);
  };

  const startEditing = (pet_id: number) => {
    setPetId(pet_id);
    setIsEditing(true);
    showModal();
  };

  const doneEditing = () => {
    setIsEditing(false);
  };

  const openDetail = (petId: number) => {
    setPetId(petId);
    setIsDetail(true);
    showModal();
  };

  const deleteItem = async (petId: number) => {
    api
      .delete(`pets/${petId}`)
      .then((response) => toast.success("Pet deletado com sucesso"))
      .catch((response) => toast.error("Erro ao deletar o pet."));
    setUpdatePets(!updatePets);
  };

  return (
    <>
      <GlobalStyles />
      <PetsList
        update={updatePets}
        startEditing={startEditing}
        openDetail={openDetail}
        deleteItem={deleteItem}
      />
      <ToastContainer />

      <Modal show={show} handleClose={hideModal}>
        {!isEditing && !isDetail && <AddPetForm handleClose={hideModal} />}
        {isEditing && (
          <EditPetForm
            doneEditing={doneEditing}
            pet_id={petId}
            handleClose={hideModal}
          />
        )}

        {isDetail && <PetCard petId={petId} />}
      </Modal>
      <div className="main-btn-container">
        <button className="btn-main" type="button" onClick={showModal}>
          Adicionar pet
        </button>
      </div>
    </>
  );
}

export default App;
