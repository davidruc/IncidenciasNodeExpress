import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {incidencia} from "../controller/incidencia.js";
import { validate } from "class-validator";

const proxyincidencia = express();


proxyincidencia.use(async (req,res,next)=>{
    try {
        let data = plainToClass(incidencia, req.body, {excludeExtraneousValues: true});
        await validate(data); 
        next();
    } catch (err) {
        res.status(err.status).send(err); 
    }
})


proxyincidencia.use("/:id" , async (req,res,next)=>{
    try {
        let parametro = plainToClass(incidencia, req.params, {excludeExtraneousValues: true});
        await validate(parametro); 
        let data = plainToClass(incidencia, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyincidencia; 