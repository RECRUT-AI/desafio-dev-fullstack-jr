import { useState } from "react";
import AddPetForm from "./components/AddPetForm";
import EditPetForm from "./components/EditPetForm";

import PetsList from "./components/PetsList";
import Modal from "./components/Modal";
import GlobalStyles from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import PetCard from "./components/PetCard";
import { api } from "./services/api";
import Header from "./components/Header";

function App() {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [petId, setPetId] = useState(0);
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
      .then((response) =>
        toast.success("Pet deletado com sucesso", {
          position: toast.POSITION.TOP_CENTER,
        })
      )
      .catch((response) =>
        toast.error("Erro ao deletar o pet.", {
          position: toast.POSITION.TOP_CENTER,
        })
      );

    setUpdatePets(!updatePets);
    console.log("atualizou");
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <ToastContainer />
      <PetsList
        update={updatePets}
        startEditing={startEditing}
        openDetail={openDetail}
        deleteItem={deleteItem}
      />

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
