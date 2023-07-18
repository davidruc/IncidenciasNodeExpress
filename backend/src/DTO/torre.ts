import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class torre{
    @IsInt()
    @Expose({name: "id_torre"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_torre: number;
    @Expose({name: "marca_torre"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value == "undefined") return(value); else throw {status: 400, message:`el parámetro ingresado para marca no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    marca_torre: string;
    @IsInt()
    @Expose({name: "estado_torre"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del estado_torre ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    estado_torre: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        torre: number,
        marca: string,
        fk_estado: number,
        idBuscado: number
    ){
        this.id_torre = torre;
        this.marca_torre = marca;
        this.estado_torre = fk_estado;
        this.id = idBuscado;
    }   
}