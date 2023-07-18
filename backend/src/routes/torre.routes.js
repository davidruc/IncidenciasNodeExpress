import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxytorre from "../middleware/middlewaretorre.js";
dotenv.config()
let con = undefined;
const routestorre = Router();

routestorre.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routestorre.get("/:id?", proxytorre,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM torre WHERE id_torre = ?", req.params.id]
    : ["SELECT * FROM torre"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la torre:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routestorre.post("/", proxytorre ,(req, res) => {
    con.query(`INSERT INTO torre SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routestorre.put("/:id", proxytorre, (req,res)=>{
    con.query(`UPDATE torre SET ?  WHERE id_torre = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la torre ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routestorre.delete("/:id", proxytorre, (req, res)=>{
    con.query('DELETE FROM torre WHERE id_torre = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la torre ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routestorre;  