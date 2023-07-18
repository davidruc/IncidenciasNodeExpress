import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxyPantalla from "../middleware/middlewarePantalla.js";
dotenv.config()
let con = undefined;
const routesPantalla = Router();

routesPantalla.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesPantalla.get("/:id?", proxyPantalla,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM pantalla WHERE id_pantalla = ?", req.params.id]
    : ["SELECT * FROM pantalla"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la pantalla:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesPantalla.post("/", proxyPantalla ,(req, res) => {
    con.query(`INSERT INTO pantalla SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesPantalla.put("/:id", proxyPantalla, (req,res)=>{
    con.query(`UPDATE pantalla SET ?  WHERE id_pantalla = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la pantalla ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesPantalla.delete("/:id", proxyPantalla, (req, res)=>{
    con.query('DELETE FROM pantalla WHERE id_pantalla = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la pantalla ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesPantalla;  