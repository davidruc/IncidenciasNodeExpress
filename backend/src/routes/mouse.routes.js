import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxymouse from "../middleware/middlewaremouse.js";
dotenv.config()
let con = undefined;
const routesmouse = Router();

routesmouse.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesmouse.get("/:id?", proxymouse,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM mouse WHERE id_mouse = ?", req.params.id]
    : ["SELECT * FROM mouse"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la mouse:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesmouse.post("/", proxymouse ,(req, res) => {
    con.query(`INSERT INTO mouse SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesmouse.put("/:id", proxymouse, (req,res)=>{
    con.query(`UPDATE mouse SET ?  WHERE id_mouse = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la mouse ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesmouse.delete("/:id", proxymouse, (req, res)=>{
    con.query('DELETE FROM mouse WHERE id_mouse = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la mouse ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesmouse;  