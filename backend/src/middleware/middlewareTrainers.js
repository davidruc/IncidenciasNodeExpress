import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {Trainers} from "./../controller/Trainers.js";
import { validate } from "class-validator";

const proxyTrainers = express();

proxyTrainers.use(async (req,res,next)=>{
    try {
        let data = plainToClass(Trainers, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})

proxyTrainers.use("/:id", async (req,res,next)=>{
    try {
        let parametro = plainToClass(Trainers, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        let data = plainToClass(Trainers, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTrainers;