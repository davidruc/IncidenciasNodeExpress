import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {torre} from "./../controller/torre.js";
import { validate } from "class-validator";

const proxytorre = express();

proxytorre.use(async (req,res,next)=>{
    try {
        let data = plainToClass(torre, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})


proxytorre.use("/:id", async (req,res,next)=>{
    try {
        let data = plainToClass(torre, req.body , { excludeExtraneousValues: true});
        await validate(data);
        let parametro = plainToClass(torre, req.params, { excludeExtraneousValues: true});
        await validate(parametro);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxytorre;