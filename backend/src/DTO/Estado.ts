import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class Estado{
    @IsInt()
    @Expose({name: "id_estado"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_estado: number;
    @Expose({name: "nombre_estado"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value) || typeof value == "undefined") return value; else throw {status: 400, message:`El dato nombre incumple los parametros acordados`}
    },{ toClassOnly: true})
    nombre_estado: String;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        estado: number,
        descripcion: string,
        idBuscado: number
    ){
        this.id_estado = estado;
        this.nombre_estado = descripcion;
        this.id = idBuscado;
    }   
}