const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "batata10",
  database: "crud_petshop",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get
app.get("/api/get", (req, res) => {
  const slqGet = "SELECT * FROM petshop_db";
  db.query(slqGet, (error, result) => {
    res.send(result);
  });
});

//post
app.post("/api/post", (req, res) => {
  const { nome, nascimento, tipo, raca, sexo, nome_tutor, phone } = req.body;
  const sqlInsert =
    "INSERT INTO petshop_db (nome, nascimento, tipo, raca, sexo, nome_tutor, phone) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [nome, nascimento, tipo, raca, sexo, nome_tutor, phone],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

//delete
app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE from petshop_db WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

//update
app.get("/api/get/:id", (req, res) => {
  const {id} = req.params;
  const slqGet = "SELECT * FROM petshop_db WHERE id = ?";
  db.query(slqGet, id, (error, result) => {
    if (error){
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const {id} = req.params;
  const { nome, nascimento, tipo, raca, sexo, nome_tutor, phone} = req.body;
  const slqUpdate = "UPDATE petshop_db SET nome = ?, nascimento = ?, tipo = ?, raca = ?, sexo = ?, nome_tutor = ?, phone = ? WHERE id = ?";
  db.query(slqUpdate,
     [nome, nascimento, tipo, raca, sexo, nome_tutor, phone, id],  (error, result) => {
    if (error){
      console.log(error);
    }
    res.send(result);
  });
});

//port
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
