const express = require("express");
const routes = require("./routes");
const cors = require("cors")

const connection = require("./database/connection");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




/**
 * Metodos HTTP
 * 
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Editar alguma informação no backend
 * DELETE: Remover uma informação no backend
 */

app.listen(3333);