import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class categoria{
    @IsInt()
    @Expose({name: "id_categoria"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_categoria: number;
    @Expose({name: "tipo_categoria"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato nombre incumple los parametros acordados`};},{ toClassOnly: true})
    tipo_categoria: String;
    constructor(
        categoria: number,
        descripcion: string
    ){
        this.id_categoria = categoria;
        this.tipo_categoria = descripcion;
    }   
}