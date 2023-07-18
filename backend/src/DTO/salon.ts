import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate} from 'class-validator';
import 'reflect-metadata';

export class salon{
    @IsInt()
    @Expose({name: "id_salon"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id id_salon ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id_salon: number;
    @Expose({name: "nombre_salon"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value) || typeof value == "undefined") return value; else throw {status: 400, message:`El dato nombre incumple los parametros acordados`}
    },{ toClassOnly: true})
    nombre_salon: String;
    @IsInt()
    @Expose({name: "trainner_salon"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id trainner_salon ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    trainner_salon: number;
    @IsInt()
    @Expose({name: "area_salon"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id area_salon ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    area_salon: number;
    @IsInt()
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato del id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    constructor(
        salon: number,
        nombre: string,
        idArea: number,
        idTrainer: number,
        idBuscado: number
    ){
        this.id_salon = salon;
        this.nombre_salon = nombre;
        this.id = idBuscado;
        this.area_salon = idArea;
        this.trainner_salon = idTrainer;
    }   
}