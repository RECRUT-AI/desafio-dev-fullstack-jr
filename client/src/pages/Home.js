import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/addContact">
        <button className="btn btn-contact">Add animal</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}> No.</th>
            <th style={{ textAlign: "center" }}> Name.</th>
            <th style={{ textAlign: "center" }}> Nascimento.</th>
            <th style={{ textAlign: "center" }}> Tipo.</th>
            <th style={{ textAlign: "center" }}> Raça.</th>
            <th style={{ textAlign: "center" }}> Sexo.</th>
            <th style={{ textAlign: "center" }}> Nome do Tutor</th>
            <th style={{ textAlign: "center" }}> Contato</th>
            <th style={{ textAlign: "center" }}> Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.nome}</td>
                <td>{item.nascimento}</td>
                <td>{item.tipo}</td>
                <td>{item.raca}</td>
                <td>{item.sexo}</td>
                <td>{item.nome_tutor}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete">Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
