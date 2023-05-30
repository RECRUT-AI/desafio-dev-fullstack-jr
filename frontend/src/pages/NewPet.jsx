import { useState } from "react";
import styles from "./NewPet.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const API = "http://localhost:3000";

export function NewPet() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [race, setRace] = useState("");
  const [owner_name, setOwnerName] = useState("");
  const [owner_phone, setOwnerPhone] = useState("");
  const [type, setType] = useState("dog");
  const [img_url, setImgUrl] = useState("");

  const navigate = useNavigate();

  const handleCreatePet = async (e) => {
    e.preventDefault();
    const pet = {
      name,
      age: +age,
      race,
      type,
      owner_name,
      owner_phone,
      img_url,
    };

    await fetch(API + "/pets", {
      method: "POST",
      body: JSON.stringify(pet),
      headers: { "Content-Type": "application/json" },
    });

    navigate("/");
  };

  return (
    <>
      <div className={styles.newPetArea}>
        <form className={styles.newPetForm} onSubmit={handleCreatePet}>
          <h2>Cadastre um novo pet</h2>
          <label>Tipo de pet</label>
          <select onChange={(e) => setType(e.target.value)}>
            <option value={"cat"}>Gato</option>
            <option value={"dog"}>Cachorro</option>
          </select>
          <input
            name="name"
            placeholder="Qual o nome do pet?"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="age"
            placeholder="Qual a idade do pet?"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            name="race"
            placeholder="Qual a raça do pet?"
            onChange={(e) => setRace(e.target.value)}
          />
          <input
            name="owner_name"
            placeholder="Qual o nome do dono?"
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <input
            name="owner_phone"
            placeholder="Número para contato com o dono"
            onChange={(e) => setOwnerPhone(e.target.value)}
          />
          <input
            name="img_url"
            placeholder="Cole uma url de imagem para usar"
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <footer>
            <button type="submit" onSubmit={handleCreatePet}>
              Cadastrar
            </button>
          </footer>
        </form>
      </div>
      <NavLink className={styles.backLink} to={"/"}>
        Voltar para lista de pets
      </NavLink>
    </>
  );
}

