import { Router } from "express";
import mysql from "mysql2"; 
import proxyincidencia from "../middleware/middlewareincidencia.js"

let con = undefined;
const routesincidencia = Router();

routesincidencia.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesincidencia.get("/:id?", proxyincidencia ,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM incidencia WHERE id_incidencia = ?", req.params.id]
    : ["SELECT * FROM incidencia"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de los incidencias:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
})

routesincidencia.post("/" , proxyincidencia ,(req, res) => {
    con.query(`INSERT INTO incidencia SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear el incidencia:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesincidencia.put("/:id", proxyincidencia, (req,res)=>{
    con.query(`UPDATE incidencia SET ?  WHERE id_incidencia = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar el incidencia ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesincidencia.delete("/:id", proxyincidencia, (req, res)=>{
    con.query('DELETE FROM incidencia WHERE id_incidencia = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar el incidencia ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesincidencia;  