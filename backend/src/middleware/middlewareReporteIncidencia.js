import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {ReporteIncidencia} from "./../controller/ReporteIncidencia.js";
import { validate } from "class-validator";

const proxyReporteIncidencia = express();

proxyReporteIncidencia.use(async (req,res,next)=>{
    try {
        let data = plainToClass(ReporteIncidencia, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})


proxyReporteIncidencia.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(ReporteIncidencia, req.body , { excludeExtraneousValues: true});
        await validate(data);
        let parametro = plainToClass(ReporteIncidencia, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyReporteIncidencia;