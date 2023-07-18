import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxyTipoIncidencia from "../middleware/middlewareTipoIncidencia.js"
dotenv.config()
let con = undefined;
const routesTipoIncidencia = Router();

routesTipoIncidencia.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesTipoIncidencia.get("/:id?", proxyTipoIncidencia,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM tipo_incidencia WHERE id_tipo_incidencia = ?", req.params.id]
    : ["SELECT * FROM tipo_incidencia"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la categoría:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesTipoIncidencia.post("/", proxyTipoIncidencia ,(req, res) => {
    con.query(`INSERT INTO tipo_incidencia SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear tipo_incidencia:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesTipoIncidencia.put("/:id", proxyTipoIncidencia, (req,res)=>{
    con.query(`UPDATE tipo_incidencia SET ?  WHERE id_tipo_incidencia = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la categoría ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesTipoIncidencia.delete("/:id", proxyTipoIncidencia, (req, res)=>{
    con.query('DELETE FROM tipo_incidencia WHERE id_tipo_incidencia = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la categoría ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesTipoIncidencia;  