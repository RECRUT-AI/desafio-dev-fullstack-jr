import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import AddPetForm from "./components/AddPetForm";

import PetsList from "./components/PetsList";
import Modal from "./components/Modal";
import GlobalStyles from "./styles/global";

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <GlobalStyles />
      <PetsList />

      <Modal show={show} handleClose={hideModal}>
        <AddPetForm />
      </Modal>
      <button type="button" onClick={showModal}>
        Open
      </button>
    </>
  );
}

export default App;
