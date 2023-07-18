import { Router } from "express";
import mysql from "mysql2"; 
import proxysalon from "../middleware/middlewaresalon.js"

let con = undefined;
const routessalon = Router();

routessalon.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routessalon.get("/:id?", proxysalon ,(req, res)=>{ 
    let sql = (req.params.id)
    ? ["SELECT * FROM salon WHERE id_salon = ?", req.params.id]
    : ["SELECT * FROM salon"]
    con.query(...sql, (err, data, fil)=>{
        if(err){
            console.log("error al obtener los datos de los salons:  ", err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
})

routessalon.post("/" , proxysalon ,(req, res) => {
    con.query(`INSERT INTO salon SET ?`, req.body, (err, response) => {
            if (err) {
                console.error('Error al crear el salon:', err.message);
                res.sendStatus(500);
            } else {
                res.send(response);
            }
        }
    );
});

routessalon.put("/:id", proxysalon, (req,res)=>{
    con.query(`UPDATE salon SET ?  WHERE id_salon = ?`,[req.body, req.params.id], (err, response)=>{
        if(err){
            console.error(`Error al actualizar el salon ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
        
            res.send(response); 
        }
    })
})

routessalon.delete("/:id", proxysalon, (req, res)=>{
    con.query('DELETE FROM salon WHERE id_salon = ?', req.params.id, (err, response)=>{

        if(err){
            console.error(`Error al eliminar el salon ${req.params.id}`, err.message);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
});

export default routessalon;  