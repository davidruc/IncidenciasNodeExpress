import express from "express";
import dotenv from "dotenv";
import routesCategorias from "./routes/categoria.routes.js";
import routesTipoIncidencia from "./routes/tipoIncidencia.routes.js";
import routesReporteIncidencia from "./routes/reporteIncidencia.routes.js";
import routesEstado from "./routes/estado.routes.js";
import routesTrainers from "./routes/trainers.routes.js";
import routesPantalla from "./routes/pantalla.routes.js";
import 'reflect-metadata';
/* import {SignJWT, jwtVerify} from 'jose';  */


dotenv.config();
const app = express();

app.use(express.json());

app.use("/categoria", routesCategorias);   
app.use("/tipoIncidencia", routesTipoIncidencia);
app.use("/reporteIncidencia", routesReporteIncidencia);
app.use("/estados", routesEstado);
app.use("/trainer", routesTrainers); 
app.use("/pantalla", routesPantalla);
// textEnconder es una instacia de node para traer las encriptaciones de node

// SignJWT es una clase que retorna promesas.

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


export default app; 