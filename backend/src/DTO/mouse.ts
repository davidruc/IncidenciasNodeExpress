import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class mouse{
    @IsInt()
    @Expose({name: "id_mouse"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_mouse: number;
    @Expose({name: "marca_mouse"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value == "undefined") return(value); else throw {status: 400, message:`el parámetro ingresado para marca no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    marca_mouse: string;
    @IsInt()
    @Expose({name: "estado_mouse"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del estado_mouse ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    estado_mouse: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        mouse: number,
        marca: string,
        fk_estado: number,
        idBuscado: number
    ){
        this.id_mouse = mouse;
        this.marca_mouse = marca;
        this.estado_mouse = fk_estado;
        this.id = idBuscado;
    }   
}