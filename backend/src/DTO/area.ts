import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class area{
    @IsInt()
    @Expose({name: "id_area"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_area: number;
    @Expose({name: "nombre_area"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value) || typeof value == "undefined") return value; else throw {status: 400, message:`El dato nombre incumple los parametros acordados`}
    },{ toClassOnly: true})
    nombre_area: String;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        area: number,
        descripcion: string,
        idBuscado: number
    ){
        this.id_area = area;
        this.nombre_area = descripcion;
        this.id = idBuscado;
    }   
}