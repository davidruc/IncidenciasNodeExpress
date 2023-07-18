import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class diadema{
    @IsInt()
    @Expose({name: "id_diadema"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_diadema: number;
    @Expose({name: "marca_diadema"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value == "undefined") return(value); else throw {status: 400, message:`el parámetro ingresado para marca no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    marca_diadema: string;
    @IsInt()
    @Expose({name: "estado_diadema"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del estado_diadema ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    estado_diadema: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        diadema: number,
        marca: string,
        fk_estado: number,
        idBuscado: number
    ){
        this.id_diadema = diadema;
        this.marca_diadema = marca;
        this.estado_diadema = fk_estado;
        this.id = idBuscado;
    }   
}