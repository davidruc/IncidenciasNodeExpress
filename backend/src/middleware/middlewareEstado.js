import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {Estado} from "../controller/Estado.js";
import { validate } from "class-validator";

const proxyEstado = express();


proxyEstado.use(async (req,res,next)=>{
    try {
        let data = plainToClass(Estado, req.body, {excludeExtraneousValues: true});
        await validate(data); 
        next();
    } catch (err) {
        res.status(err.status).send(err); 
    }
})


proxyEstado.use("/:id" , async (req,res,next)=>{
    try {
        let parametro = plainToClass(Estado, req.params, {excludeExtraneousValues: true});
        await validate(parametro); 
        let data = plainToClass(Estado, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyEstado; 