import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxyTrainers from "../middleware/middlewareTrainers.js"
dotenv.config()
let con = undefined;
const routesTrainers = Router();

routesTrainers.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesTrainers.get("/:id?", proxyTrainers,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM trainners WHERE id_trainner = ?", req.params.id]
    : ["SELECT * FROM trainners"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de los trainers:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesTrainers.post("/", proxyTrainers ,(req, res) => {
    con.query(`INSERT INTO trainners SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear trainners:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesTrainers.put("/:id", proxyTrainers, (req,res)=>{
    con.query(`UPDATE trainners SET ?  WHERE id_trainner = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar el trainer ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesTrainers.delete("/:id", proxyTrainers, (req, res)=>{
    con.query('DELETE FROM trainners WHERE id_trainner = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar el trainer ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesTrainers;  