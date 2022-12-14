const { request } = require("express");
const express = require("express");

const app = express();

app.use(express.json()); //Para receber JSON dentro da aplicação como parâmetro de uma Query.

app.get("/", (request, response) => {
  response.json({ message: "Curso NODE JS" });
});

app.get("/courses", (request, response) => {
  const query = request.query; //Query Params - Paginação/Filtro
  console.log(query);
  response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body; //Body Params - Os objetos Inserção/Alteração (JSON)
  console.log(body);
  response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params; //Route params - Identificar um recurso editar/deletar/buscar
  console.log(id);
  response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333); //localhost:3333
