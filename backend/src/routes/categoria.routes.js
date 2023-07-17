import { Router } from "express";
import mysql from "mysql2";
import proxyCategoria from "../middleware/middlewareCategoria.js"

let con = undefined;
const routesCategorias = Router();

routesCategorias.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesCategorias.get("/", proxyCategoria ,(req, res)=>{
    con.query("SELECT * FROM categoria", (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la categoría: ", err.message);
            res.sendStatus(500);
        } else {
            res.json(data);
        }
    })
})

export default routesCategorias; 