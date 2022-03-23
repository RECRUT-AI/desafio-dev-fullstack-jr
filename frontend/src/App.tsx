import React, { useState } from "react";
import AddPetForm from "./components/AddPetForm";
import EditPetForm from "./components/EditPetForm";

import PetsList from "./components/PetsList";
import Modal from "./components/Modal";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [petId, setPetId] = useState(0);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    if (isEditing) {
      setIsEditing(false);
    }

    setShow(false);
  };

  const startEditing = (pet_id: number) => {
    setPetId(pet_id);
    setIsEditing(true);
    showModal();
  };

  const doneEditing = () => {
    setIsEditing(false);
  };
  return (
    <>
      <GlobalStyles />
      <PetsList update={show} startEditing={startEditing} />
      <ToastContainer />

      <Modal show={show} handleClose={hideModal}>
        {!isEditing && <AddPetForm handleClose={hideModal} />}
        {isEditing && (
          <EditPetForm
            doneEditing={doneEditing}
            pet_id={petId}
            handleClose={hideModal}
          />
        )}
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
