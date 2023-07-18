import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {area} from "../controller/area.js";
import { validate } from "class-validator";

const proxyarea = express();


proxyarea.use(async (req,res,next)=>{
    try {
        let data = plainToClass(area, req.body, {excludeExtraneousValues: true});
        await validate(data); 
        next();
    } catch (err) {
        res.status(err.status).send(err); 
    }
})


proxyarea.use("/:id" , async (req,res,next)=>{
    try {
        let parametro = plainToClass(area, req.params, {excludeExtraneousValues: true});
        await validate(parametro); 
        let data = plainToClass(area, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyarea; 