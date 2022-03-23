import { useForm } from "react-hook-form";
import { api } from "../../services/api";

import { Pet } from "../../types";
import { Container } from "./styles";

const AddPetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pet>();

  // Adicionar toasts para os erros ou successos
  const onSubmit = handleSubmit(async (data) =>
    api
      .post("pets", data)
      .then((response) => console.log("Animal cadastrado"))
      .catch((response) => console.log("Erro"))
  );

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <label>Nome</label>
        <input {...register("name")} />
        <label>Idade</label>
        <input {...register("age")} />
        <label className="type">Tipo</label>
        <select {...register("type")}>
          <option value="Cat">Gato</option>
          <option value="Dog">Cachorro</option>
        </select>
        <label>Raça</label>
        <input {...register("breed")} />
        <label>Nome do tutor</label>
        <input {...register("tutorName")} />
        <label>Telefone do tutor</label>
        <input {...register("tutorPhone")} />
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default AddPetForm;
