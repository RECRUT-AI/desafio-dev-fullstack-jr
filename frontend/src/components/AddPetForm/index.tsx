import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";

import { Pet } from "../../types";
import { Container } from "./styles";

interface AddPetFormProps {
  handleClose: () => void;
}

const AddPetForm = ({ handleClose }: AddPetFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Pet>();

  // Adicionar toasts para os erros ou successos
  const onSubmit = handleSubmit(async (data) => {
    handleClose();
    api
      .post("pets", data)
      .then((response) => toast.success("Pet cadastrado com sucesso"))
      .catch((response) => toast.error("Erro no cadastro."));
  });

  useEffect(() => {
    reset({ name: "", breed: "", tutorName: "", tutorPhone: "" });
  }, [isSubmitSuccessful]);

  return (
    <Container>
      <h2>Cadastro de pet</h2>
      <form onSubmit={onSubmit}>
        <label>Nome</label>
        <input {...register("name")} placeholder="Nome do pet" />
        <label>Idade</label>
        <input {...register("age")} placeholder="Idade do pet" />
        <label className="type">Tipo</label>
        <select {...register("type")}>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
        <label>Raça</label>
        <input {...register("breed")} placeholder="Raça do pet" />
        <label>Nome do tutor</label>
        <input {...register("tutorName")} placeholder="Nome do tutor" />
        <label>Telefone do tutor</label>
        <input {...register("tutorPhone")} placeholder="Telefone do pet" />
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default AddPetForm;
