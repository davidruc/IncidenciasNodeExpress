import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {Pantalla} from "./../controller/Pantalla.js";
import { validate } from "class-validator";

const proxyPantalla = express();

proxyPantalla.use(async (req,res,next)=>{
    try {
        let data = plainToClass(Pantalla, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})


proxyPantalla.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(Pantalla, req.body , { excludeExtraneousValues: true});
        await validate(data);
        let parametro = plainToClass(Pantalla, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyPantalla;