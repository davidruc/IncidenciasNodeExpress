import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class ReporteIncidencia{
    @IsInt()
    @Expose({name: "id_reporte"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_reporte: number;
    @Expose({name: "fecha_reporte"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value)) return(value); else throw {status: 400, message:`el parámetro ingresado para fecha no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    fecha_reporte: string;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        reporte: number,
        fecha: string,
        idBuscado: number
    ){
        this.id_reporte = reporte;
        this.fecha_reporte = fecha;
        this.id = idBuscado;
    }   
}