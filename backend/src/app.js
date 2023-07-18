import express from "express";
import dotenv from "dotenv";
import routesCategorias from "./routes/categoria.routes.js";
import 'reflect-metadata';
import {SignJWT, jwtVerify} from 'jose'; 


dotenv.config();
const app = express();

app.use(express.json());

app.use("/categoria", routesCategorias);    

// textEnconder es una instacia de node para traer las encriptaciones de node

// SignJWT es una clase que retorna promesas.

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


export default app; 