import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class TipoIncidencia{
    @IsInt()
    @Expose({name: "id_tipo_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_tipo_incidencia: number;
    @Expose({name: "tipo_incidencia"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato nombre incumple los parametros acordados`};},{ toClassOnly: true})
    tipo_incidencia: String;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        tipo_incidencia: number,
        descripcion: string,
        idBuscado: number
    ){
        this.id_tipo_incidencia = tipo_incidencia;
        this.tipo_incidencia = descripcion;
        this.id = idBuscado;
    }   
}