import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {mouse} from "./../controller/mouse.js";
import { validate } from "class-validator";

const proxymouse = express();

proxymouse.use(async (req,res,next)=>{
    try {
        let data = plainToClass(mouse, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})


proxymouse.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(mouse, req.body , { excludeExtraneousValues: true});
        await validate(data);
        let parametro = plainToClass(mouse, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxymouse;