import { Router } from "express";
import mysql from "mysql2"; 
import proxyEstado from "../middleware/middlewareEstado.js"

let con = undefined;
const routesEstado = Router();

routesEstado.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesEstado.get("/:id?", proxyEstado ,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM estado WHERE id_estado = ?", req.params.id]
    : ["SELECT * FROM estado"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de los estados:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
})

routesEstado.post("/" , proxyEstado ,(req, res) => {
    con.query(`INSERT INTO estado SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear el estado:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesEstado.put("/:id", proxyEstado, (req,res)=>{
    con.query(`UPDATE estado SET ?  WHERE id_estado = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar el estado ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesEstado.delete("/:id", proxyEstado, (req, res)=>{
    con.query('DELETE FROM estado WHERE id_estado = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar el estado ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesEstado;  