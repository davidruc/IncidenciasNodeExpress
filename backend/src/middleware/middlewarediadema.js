import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {diadema} from "./../controller/diadema.js";
import { validate } from "class-validator";

const proxydiadema = express();

proxydiadema.use(async (req,res,next)=>{
    try {
        let data = plainToClass(diadema, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})


proxydiadema.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(diadema, req.body , { excludeExtraneousValues: true});
        await validate(data);
        let parametro = plainToClass(diadema, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxydiadema;