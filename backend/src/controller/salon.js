var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
import { IsInt } from 'class-validator';
import 'reflect-metadata';
export class salon {
    constructor(salon, nombre, idArea, idTrainer, idBuscado) {
        this.id_salon = salon;
        this.nombre_salon = nombre;
        this.id = idBuscado;
        this.area_salon = idArea;
        this.trainner_salon = idTrainer;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "id_salon" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del id id_salon ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon.prototype, "id_salon", void 0);
__decorate([
    Expose({ name: "nombre_salon" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value) || typeof value == "undefined")
            return value;
        else
            throw { status: 400, message: `El dato nombre incumple los parametros acordados` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], salon.prototype, "nombre_salon", void 0);
__decorate([
    IsInt(),
    Expose({ name: "trainner_salon" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del id trainner_salon ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon.prototype, "trainner_salon", void 0);
__decorate([
    IsInt(),
    Expose({ name: "area_salon" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del id area_salon ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon.prototype, "area_salon", void 0);
__decorate([
    IsInt(),
    Expose({ name: "id" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del id ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon.prototype, "id", void 0);
