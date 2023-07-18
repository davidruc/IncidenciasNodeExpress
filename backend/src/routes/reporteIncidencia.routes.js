import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxyReporteIncidencia from "../middleware/middlewareReporteIncidencia.js";
dotenv.config()
let con = undefined;
const routesReporteIncidencia = Router();

routesReporteIncidencia.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesReporteIncidencia.get("/:id?", proxyReporteIncidencia,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM reporte_incidencia WHERE id_reporte = ?", req.params.id]
    : ["SELECT * FROM reporte_incidencia"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la categoría:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesReporteIncidencia.post("/", proxyReporteIncidencia ,(req, res) => {
    con.query(`INSERT INTO reporte_incidencia SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesReporteIncidencia.put("/:id", proxyReporteIncidencia, (req,res)=>{
    con.query(`UPDATE reporte_incidencia SET ?  WHERE id_reporte = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la categoría ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesReporteIncidencia.delete("/:id", proxyReporteIncidencia, (req, res)=>{
    con.query('DELETE FROM reporte_incidencia WHERE id_reporte = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la categoría ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesReporteIncidencia;  