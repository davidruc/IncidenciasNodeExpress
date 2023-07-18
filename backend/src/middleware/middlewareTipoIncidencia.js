import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {TipoIncidencia} from "./../controller/TipoIncidencia.js";
import { validate } from "class-validator";

const proxyTipoIncidencia = express();

proxyTipoIncidencia.use(async (req,res,next)=>{
    try {
        let data = plainToClass(TipoIncidencia, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})

proxyTipoIncidencia.use("/:id",async (req,res,next)=>{
    try {
        let parametro = plainToClass(TipoIncidencia, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        let data = plainToClass(TipoIncidencia, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTipoIncidencia;