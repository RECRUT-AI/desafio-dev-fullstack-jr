import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./ViewPet.module.css";

const API = "http://localhost:3000";

export function ViewPet() {
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
  }, {});

  return (
    <>
      <div className={styles.viewPetBox}>
        <div className={styles.petSession}>
          <img src={img_url} />
          <div className={styles.petInfo}>
            <h1>{name}</h1>
            <span>Tipo: {type}</span>
            <span>Raça: {race}</span>
            <span>Idade: {age} anos</span>
          </div>
        </div>
        <div className={styles.ownerInfo}>
          <span>Dono: {owner_name}</span>
          <span>Contato: {owner_phone}</span>
        </div>
      </div>
      <NavLink className={styles.backLink} to={"/"}>
        Voltar para lista de pets
      </NavLink>
    </>
  );
}

