import { useState, useEffect } from "react";
import { Pet } from "../components/Pet";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const API = "http://localhost:3000";

export function Home() {
  const [pets, setPets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPets = async () => {
      const res = await fetch(API + "/pets")
        .then((res) => res.json())
        .then();

      setPets(res);
    };

    loadPets();
  }, []);

  function deletePet(petId) {
    setPets((prevState) => prevState.filter((pet) => pet.id !== petId));
  }

  return (
    <>
      <main>
        <button
          onClick={() => navigate("/NewPet")}
          className={styles.redirectToNewPetPageButton}
        >
          + Novo pet
        </button>
        {pets.map((pet) => {
          return <Pet key={pet.id} pet={pet} onDeletePets={deletePet} />;
        })}
      </main>
    </>
  );
}

