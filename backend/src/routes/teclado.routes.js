import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import proxyteclado from "../middleware/middlewareteclado.js";
dotenv.config()
let con = undefined;
const routesteclado = Router();

routesteclado.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesteclado.get("/:id?", proxyteclado,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM teclado WHERE id_teclado = ?", req.params.id]
    : ["SELECT * FROM teclado"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de la teclado:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

routesteclado.post("/", proxyteclado ,(req, res) => {
    con.query(`INSERT INTO teclado SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routesteclado.put("/:id", proxyteclado, (req,res)=>{
    con.query(`UPDATE teclado SET ?  WHERE id_teclado = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar la teclado ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routesteclado.delete("/:id", proxyteclado, (req, res)=>{
    con.query('DELETE FROM teclado WHERE id_teclado = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar la teclado ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routesteclado;  