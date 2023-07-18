import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxydiadema from "../middleware/middlewarediadema.js";
dotenv.config()
let con = undefined;
const routesdiadema = Router();

routesdiadema.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesdiadema.get("/:id?", proxydiadema,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM diadema WHERE id_diadema = ?", req.params.id]
    : ["SELECT * FROM diadema"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la diadema:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesdiadema.post("/", proxydiadema ,(req, res) => {
    con.query(`INSERT INTO diadema SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesdiadema.put("/:id", proxydiadema, (req,res)=>{
    con.query(`UPDATE diadema SET ?  WHERE id_diadema = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la diadema ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesdiadema.delete("/:id", proxydiadema, (req, res)=>{
    con.query('DELETE FROM diadema WHERE id_diadema = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la diadema ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesdiadema;  