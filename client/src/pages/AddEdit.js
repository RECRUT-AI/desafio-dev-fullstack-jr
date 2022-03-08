import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  nome: "",
  nascimento: "",
  tipo: "",
  raca: "",
  sexo: "",
  nome_tutor: "",
  phone: "",
};

export const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { nome, nascimento, tipo, raca, sexo, nome_tutor, phone } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !nascimento || !tipo || !raca ||!sexo || !nome_tutor || !phone){
      toast.error("Por favor, preencha todos os campos corretamente");
    } else {
      if(!id){
        axios.post("http://localhost:5000/api/post",{
          nome,
          nascimento,
          tipo,
          raca,
          sexo,
          nome_tutor,
          phone
        }).then(() => {setState({nome:"", nascimento:"", tipo:"", raca:"", sexo:"", nome_tutor:"", phone:""});
      }).catch((err) => toast.error(err.response.data));
      toast.success("Animal adicionado com sucesso");
      } else {
        axios.put(`http://localhost:5000/api/update/${id}`,{
          nome,
          nascimento,
          tipo,
          raca,
          sexo,
          nome_tutor,
          phone
        }).then(() => {setState({nome:"", nascimento:"", tipo:"", raca:"", sexo:"", nome_tutor:"", phone:""});
      }).catch((err) => toast.error(err.response.data));
      toast.success("Animal update com sucesso");
      }
      setTimeout(() => navigate.push("/"),600);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="nome">Nome do animal</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome do animal"
          value={nome || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="nascimento">Data de nascimento</label>
        <input
          type="text"
          id="nascimento"
          name="nascimento"
          placeholder="Data de nascimento no formato: aaaa-mm-dd"
          value={nascimento || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="tipo">Tipo</label>
        <input
          type="text"
          id="tipo"
          name="tipo"
          placeholder="Tipo. Ex: cachorro, gato, ave."
          value={tipo || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="raca">Raça</label>
        <input
          type="text"
          id="raca"
          name="raca"
          placeholder="Raça"
          value={raca || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="sexo">Sexo</label>
        <input
          type="text"
          id="sexo"
          name="sexo"
          placeholder="Sexo do animal: M ou F"
          value={sexo || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="nome_tutor">Nome do Tutor</label>
        <input
          type="text"
          id="nome_tutor"
          name="nome_tutor"
          placeholder="Nome do tutor"
          value={nome_tutor || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Telefone"
          value={phone || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Adicionar"} />
        <Link to="/">
          <input type="button" value="Voltar" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
