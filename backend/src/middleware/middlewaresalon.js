import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {salon} from "../controller/salon.js";
import { validate } from "class-validator";

const proxysalon = express();


proxysalon.use(async (req,res,next)=>{
    try {
        let data = plainToClass(salon, req.body, {excludeExtraneousValues: true});
        await validate(data); 
        next();
    } catch (err) {
        res.status(err.status).send(err); 
    }
})


proxysalon.use("/:id" , async (req,res,next)=>{
    try {
        let parametro = plainToClass(salon, req.params, {excludeExtraneousValues: true});
        await validate(parametro); 
        let data = plainToClass(salon, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxysalon; 