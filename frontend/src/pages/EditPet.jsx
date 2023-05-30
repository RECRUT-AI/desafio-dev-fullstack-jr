import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./EditPet.module.css";

const API = "http://localhost:3000";

export function EditPet() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [race, setRace] = useState("");
  const [owner_name, setOwnerName] = useState("");
  const [owner_phone, setOwnerPhone] = useState("");
  const [type, setType] = useState("dog");
  const [img_url, setImgUrl] = useState("");

  useEffect(() => {
    const loadPet = async () => {
      const pet = await fetch(API + `/pets/${id}`)
        .then((res) => res.json())
        .then();

      setName(pet.name);
      setAge(pet.age);
      setRace(pet.race);
      setType(pet.type);
      setOwnerName(pet.owner_name);
      setOwnerPhone(pet.owner_phone);
      setImgUrl(pet.img_url);
    };

    loadPet();
  }, []);

  const navigate = useNavigate();

  const handleEditPet = async (e) => {
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

    await fetch(API + `/pets/${id}`, {
      method: "PATCH",
      body: JSON.stringify(pet),
      headers: { "Content-Type": "application/json" },
    });

    navigate("/");
  };

  return (
    <>
      <form className={styles.editPetForm} onSubmit={handleEditPet}>
        <h2>Edite o pet</h2>
        <label>Tipo de pet</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value={"cat"}>Gato</option>
          <option value={"dog"}>Cachorro</option>
        </select>
        <input
          name="name"
          placeholder="Qual o nome do pet?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="age"
          placeholder="Qual a idade do pet?"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          name="race"
          placeholder="Qual a raça do pet?"
          value={race}
          onChange={(e) => setRace(e.target.value)}
        />
        <input
          name="owner_name"
          placeholder="Qual o nome do dono?"
          value={owner_name}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <input
          name="owner_phone"
          placeholder="Número para contato com o dono"
          value={owner_phone}
          onChange={(e) => setOwnerPhone(e.target.value)}
        />
        <input
          name="img_url"
          placeholder="Cole uma url de imagem para usar"
          value={img_url}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <footer>
          <button type="submit" onSubmit={handleEditPet}>
            Editar
          </button>
        </footer>
      </form>
      <NavLink className={styles.backLink} to={"/"}>
        Voltar para lista de pets
      </NavLink>
    </>
  );
}

