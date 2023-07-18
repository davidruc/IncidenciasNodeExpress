import express from "express";
import dotenv from "dotenv";
import routesCategorias from "./routes/categoria.routes.js";
import routesTipoIncidencia from "./routes/tipoIncidencia.routes.js";
import routesReporteIncidencia from "./routes/reporteIncidencia.routes.js";
import routesEstado from "./routes/estado.routes.js";
import routesTrainers from "./routes/trainers.routes.js";
import routesPantalla from "./routes/pantalla.routes.js";
import routestorre from "./routes/torre.routes.js";
import routesteclado from "./routes/teclado.routes.js";
import routesmouse from "./routes/mouse.routes.js";
import routesdiadema from "./routes/diadema.routes.js";
import routesarea from "./routes/area.routes.js";
import routesequipo from "./routes/equipo.routes.js";
import routessalon from "./routes/salon.routes.js";
import routesincidencia from "./routes/incidencia.routes.js";
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
app.use("/torre", routestorre);
app.use("/teclado", routesteclado);
app.use("/mouse", routesmouse);
app.use("/diadema", routesdiadema);
app.use("/area", routesarea);
app.use("/equipo", routesequipo);
app.use("/salon", routessalon);
app.use("/incidencia", routesincidencia)
// textEnconder es una instacia de node para traer las encriptaciones de node

// SignJWT es una clase que retorna promesas.

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


export default app; 