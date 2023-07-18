import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class incidencia{
    @IsInt()
    @Expose({name: "id_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_incidencia: number;
    @IsInt()
    @Expose({name: "categoria_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de categoria_incidencia ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    categoria_incidencia: number;
    @IsInt()
    @Expose({name: "tipo_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de categoria_incidencia ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    tipo_incidencia: number;
    
    @Expose({ name: 'descripcion_incidencia' })
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value) ||  typeof value == "undefined") return value; else throw {status: 400, message:`El dato jornada_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    descripcion_incidencia: string;

    @Expose({name: "fecha_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de categoria_incidencia ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    fecha_incidencia: number;
    @Expose({name: "equipo_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de categoria_incidencia ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    equipo_incidencia: number; 
    @Expose({name: "lugar_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de categoria_incidencia ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    lugar_incidencia: number;
    @Expose({name: "trainner_reporta_incidencia"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de categoria_incidencia ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    trainner_reporta_incidencia: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        incidencia: number,
        lugar: number,
        categoria: number,
        descripcion: string,
        fecha: number,
        tipo: number,
        equipo: number,
        trainner:number,
        idBuscado: number
    ){
        this.id_incidencia = incidencia;
        this.lugar_incidencia  = lugar;
        this.categoria_incidencia = categoria;
        this.descripcion_incidencia = descripcion;
        this.fecha_incidencia = fecha;
        this.tipo_incidencia = tipo;
        this.equipo_incidencia = equipo;
        this.trainner_reporta_incidencia = trainner;
        this.id = idBuscado;
        
    }   
}