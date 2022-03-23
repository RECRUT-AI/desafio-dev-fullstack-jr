import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import { Pet } from "../../types";
import { Container } from "./styles";

interface EditPetFormProps {
  handleClose: () => void;
  doneEditing: () => void;
  pet_id: number;
}

const EditPetForm = ({
  handleClose,
  pet_id,
  doneEditing,
}: EditPetFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pet>();

  // Adicionar toasts para os erros ou successos
  const onSubmit = handleSubmit(async (data) => {
    doneEditing();
    handleClose();
    api
      .patch(`pets/${pet_id}`, data)
      .then((response) => toast.success("Animal editado com sucesso"))
      .catch((response) => toast.error("Erro na edição."));
  });

  return (
    <Container>
      <h2>Edição de pet</h2>
      <form onSubmit={onSubmit}>
        <label>Nome</label>
        <input {...register("name")} />
        <label>Idade</label>
        <input {...register("age")} />
        <label>Raça</label>
        <input {...register("breed")} />
        <label>Nome do tutor</label>
        <input {...register("tutorName")} />
        <label>Telefone do tutor</label>
        <input {...register("tutorPhone")} />
        <button type="submit">Editar</button>
      </form>
    </Container>
  );
};

export default EditPetForm;
