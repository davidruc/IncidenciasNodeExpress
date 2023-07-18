import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {teclado} from "./../controller/teclado.js";
import { validate } from "class-validator";

const proxyteclado = express();

proxyteclado.use(async (req,res,next)=>{
    try {
        let data = plainToClass(teclado, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})


proxyteclado.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(teclado, req.body , { excludeExtraneousValues: true});
        await validate(data);
        let parametro = plainToClass(teclado, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyteclado;