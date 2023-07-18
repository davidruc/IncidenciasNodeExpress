import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class teclado{
    @IsInt()
    @Expose({name: "id_teclado"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_teclado: number;
    @Expose({name: "marca_teclado"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value == "undefined") return(value); else throw {status: 400, message:`el parámetro ingresado para marca no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    marca_teclado: string;
    @IsInt()
    @Expose({name: "estado_teclado"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del estado_teclado ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    estado_teclado: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        teclado: number,
        marca: string,
        fk_estado: number,
        idBuscado: number
    ){
        this.id_teclado = teclado;
        this.marca_teclado = marca;
        this.estado_teclado = fk_estado;
        this.id = idBuscado;
    }   
}