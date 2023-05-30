import { useNavigate } from "react-router-dom";
import styles from "./Pet.module.css";
import { TrashSimple, Eye, PencilSimpleLine } from "phosphor-react";

const API = "http://localhost:3000";

export function Pet({ pet, onDeletePets }) {
  const navigate = useNavigate();

  async function handleDeletePet() {
    await fetch(API + `/pets/${pet.id}`, {
      method: "DELETE",
    });

    onDeletePets(pet.id);
  }

  return (
    <div className={styles.pet}>
      <img className={styles.petImg} src={pet.img_url} />
      <div className={styles.petInfo}>
        <h1>{pet.name}</h1>
        <span>
          {pet.race + ", "}
          {pet.age + " anos"}
        </span>
      </div>
      <div className={styles.options}>
        <Eye size={24} onClick={() => navigate(`/Pets/${pet.id}`)} />
        <PencilSimpleLine
          size={24}
          onClick={() => navigate(`/EditPet/${pet.id}`)}
        />
        <TrashSimple
          size={24}
          className={styles.deleteIcon}
          onClick={handleDeletePet}
        />
      </div>
    </div>
  );
}

