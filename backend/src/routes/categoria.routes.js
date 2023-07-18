import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxyCategoria from "../middleware/middlewareCategoria.js"
dotenv.config()
let con = undefined;
const routesCategorias = Router();

routesCategorias.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesCategorias.get("/:id?", proxyCategoria,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM categoria WHERE id_categoria = ?", req.params.id]
    : ["SELECT * FROM categoria"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la categoría:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesCategorias.post("/", proxyCategoria ,(req, res) => {
    con.query(`INSERT INTO categoria SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear categoria:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesCategorias.put("/:id", proxyCategoria, (req,res)=>{
    con.query(`UPDATE categoria SET ?  WHERE id_categoria = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la categoría ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesCategorias.delete("/:id", proxyCategoria, (req, res)=>{
    con.query('DELETE FROM categoria WHERE id_categoria = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la categoría ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesCategorias;  