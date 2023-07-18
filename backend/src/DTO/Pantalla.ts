import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class Pantalla{
    @IsInt()
    @Expose({name: "id_pantalla"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_pantalla: number;
    @Expose({name: "marca_pantalla"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value == "undefined") return(value); else throw {status: 400, message:`el parámetro ingresado para marca no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    marca_pantalla: string;
    @IsInt()
    @Expose({name: "estado_pantalla"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del estado_pantalla ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    estado_pantalla: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        pantalla: number,
        marca: string,
        fk_estado: number,
        idBuscado: number
    ){
        this.id_pantalla = pantalla;
        this.marca_pantalla = marca;
        this.estado_pantalla = fk_estado;
        this.id = idBuscado;
    }   
}