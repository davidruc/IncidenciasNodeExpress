import { Router } from "express";
import mysql from "mysql2"; 
import proxyequipo from "../middleware/middlewareequipo.js"

let con = undefined;
const routesequipo = Router();

routesequipo.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesequipo.get("/:id?", proxyequipo ,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM equipo WHERE id_equipo = ?", req.params.id]
    : ["SELECT * FROM equipo"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de los equipos:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
})

routesequipo.post("/" , proxyequipo ,(req, res) => {
    con.query(`INSERT INTO equipo SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear el equipo:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesequipo.put("/:id", proxyequipo, (req,res)=>{
    con.query(`UPDATE equipo SET ?  WHERE id_equipo = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar el equipo ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesequipo.delete("/:id", proxyequipo, (req, res)=>{
    con.query('DELETE FROM equipo WHERE id_equipo = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar el equipo ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesequipo;  