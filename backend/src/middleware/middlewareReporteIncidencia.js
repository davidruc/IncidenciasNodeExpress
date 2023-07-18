import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {ReporteIncidencia} from "./../controller/ReporteIncidencia.js";
import { validate } from "class-validator";

const proxyReporteIncidencia = express();
proxyReporteIncidencia.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(ReporteIncidencia, req.body && req.params, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyReporteIncidencia;