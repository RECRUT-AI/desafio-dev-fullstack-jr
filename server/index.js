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

// app.get("/", (req, res) => {
//   const sqlInsert = "INSERT INTO petshop_db (nome, nascimento, tipo, raca, sexo, nome_tutor, phone) VALUES ('Sury', '2011-03-10', 'Gato', 'SRD', 'F', 'Andressa', '3598512240' )";
//   db.query(sqlInsert, (error, result) => {
//     console.log("error", error);
//     console.log("result", result);
//     res.send("hello express");
//   });
// });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
