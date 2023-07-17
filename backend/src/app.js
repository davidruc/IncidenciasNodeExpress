import express from "express";
import dotenv from "dotenv";


import routesCategorias from "./routes/categoria.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/categorias", routesCategorias); 


const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


export default app;