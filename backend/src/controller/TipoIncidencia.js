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
export class TipoIncidencia {
    constructor(tipo_incidencia, descripcion, idBuscado) {
        this.id_tipo_incidencia = tipo_incidencia;
        this.tipo_incidencia = descripcion;
        this.id = idBuscado;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "id_tipo_incidencia" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: "el dato del id ingresado es incorrecto, ingresa un número entero" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], TipoIncidencia.prototype, "id_tipo_incidencia", void 0);
__decorate([
    Expose({ name: "tipo_incidencia" }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value) || typeof value == "undefined")
        return value;
    else
        throw { status: 400, message: `El dato nombre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], TipoIncidencia.prototype, "tipo_incidencia", void 0);
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
], TipoIncidencia.prototype, "id", void 0);
