import { Router } from "express";
import mysql from "mysql2"; 
import proxyarea from "../middleware/middlewarearea.js"

let con = undefined;
const routesarea = Router();

routesarea.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesarea.get("/:id?", proxyarea ,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM area WHERE id_area = ?", req.params.id]
    : ["SELECT * FROM area"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de los areas:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
})

routesarea.post("/" , proxyarea ,(req, res) => {
    con.query(`INSERT INTO area SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear el area:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesarea.put("/:id", proxyarea, (req,res)=>{
    con.query(`UPDATE area SET ?  WHERE id_area = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar el area ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesarea.delete("/:id", proxyarea, (req, res)=>{
    con.query('DELETE FROM area WHERE id_area = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar el area ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesarea;  