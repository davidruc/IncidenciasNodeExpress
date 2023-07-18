import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class equipo{
    @IsInt()
    @Expose({name: "id_equipo"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_equipo: number;
    @IsInt()
    @Expose({name: "pantalla_equipo"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de pantalla_equipo ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    pantalla_equipo: number;
    @IsInt()
    @Expose({name: "torre_equipo"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de pantalla_equipo ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    torre_equipo: number;
    @Expose({name: "teclado_equipo"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de pantalla_equipo ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    teclado_equipo: number;
    @Expose({name: "mouse_equipo"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de pantalla_equipo ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    mouse_equipo: number; 
    @Expose({name: "diadema_equipo"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de pantalla_equipo ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    diadema_equipo: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        equipo: number,
        mouse: number,
        teclado: number,
        pantalla: number,
        diadema: number,
        torre: number,
        idBuscado: number
    ){
        this.id_equipo = equipo;
        this.diadema_equipo  = diadema;
        this.pantalla_equipo = pantalla;
        this.teclado_equipo = teclado;
        this.torre_equipo = torre;
        this.mouse_equipo = mouse;
        this.id = idBuscado;
    }   
}