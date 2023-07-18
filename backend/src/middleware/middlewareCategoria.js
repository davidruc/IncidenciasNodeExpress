import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {categoria} from "./../controller/categoria.js";
import { validate } from "class-validator";

const proxyCategoria = express();

proxyCategoria.use(async (req,res,next)=>{
    try {
        let data = plainToClass(categoria, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})

proxyCategoria.use("/:id",async (req,res,next)=>{
    try {
        let parametro = plainToClass(categoria, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        let data = plainToClass(categoria, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyCategoria;