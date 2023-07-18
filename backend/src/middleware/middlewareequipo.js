import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {equipo} from "../controller/equipo.js";
import { validate } from "class-validator";

const proxyequipo = express();


proxyequipo.use(async (req,res,next)=>{
    try {
        let data = plainToClass(equipo, req.body, {excludeExtraneousValues: true});
        await validate(data); 
        next();
    } catch (err) {
        res.status(err.status).send(err); 
    }
})


proxyequipo.use("/:id" , async (req,res,next)=>{
    try {
        let parametro = plainToClass(equipo, req.params, {excludeExtraneousValues: true});
        await validate(parametro); 
        let data = plainToClass(equipo, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyequipo; 