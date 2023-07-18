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
export class teclado {
    constructor(teclado, marca, fk_estado, idBuscado) {
        this.id_teclado = teclado;
        this.marca_teclado = marca;
        this.estado_teclado = fk_estado;
        this.id = idBuscado;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "id_teclado" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del id ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], teclado.prototype, "id_teclado", void 0);
__decorate([
    Expose({ name: "marca_teclado" }),
    Transform(({ value }) => { if (/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value == "undefined")
        return (value);
    else
        throw { status: 400, message: `el parámetro ingresado para marca no es válido, debe seguir la sintaxis AAAA-MM-DD` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], teclado.prototype, "marca_teclado", void 0);
__decorate([
    IsInt(),
    Expose({ name: "estado_teclado" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del estado_teclado ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], teclado.prototype, "estado_teclado", void 0);
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
], teclado.prototype, "id", void 0);
