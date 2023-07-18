var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
export class Trainers {
    constructor(ID, nombre, email_personal, email_empresarial, celular_personal, celular_empresarial, telefono, telefono_empresarial, jornada) {
        this.id_trainner = ID;
        this.nombre_trainner = nombre;
        this.email_trainner_personal = email_personal;
        this.email_trainner_corporativo = email_empresarial;
        this.telefonoMobil_trainner_personal = celular_personal;
        this.telefonoMobil_trainner_empresarial = celular_empresarial;
        this.telefonoResidencia_trainner = telefono;
        this.telefonoEmpresa_trainner = telefono_empresarial;
        this.jornada_trainner = jornada;
    }
}
__decorate([
    Expose({ name: 'id_trainner' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || typeof value == "undefined")
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Trainers.prototype, "id_trainner", void 0);
__decorate([
    Expose({ name: 'nombre_trainner' }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value) || typeof value == "undefined")
        return value;
    else
        throw { status: 400, message: `El dato nombre_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainers.prototype, "nombre_trainner", void 0);
__decorate([
    Expose({ name: 'email_trainner_personal' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value) || typeof value == "undefined")
        return value;
    else
        throw { status: 400, message: `El dato email_trainner_personal incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainers.prototype, "email_trainner_personal", void 0);
__decorate([
    Expose({ name: 'email_trainner_corporativo' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value) || typeof value == "undefined")
        return value;
    else
        throw { status: 400, message: `El dato email_trainner_corporativo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainers.prototype, "email_trainner_corporativo", void 0);
__decorate([
    Expose({ name: 'telefonoMobil_trainner_personal' }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || typeof value == "undefined")
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato telefonoMobil_trainner_personal no tiene un formato de número de teléfono válido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Trainers.prototype, "telefonoMobil_trainner_personal", void 0);
__decorate([
    Expose({ name: 'telefonoMobil_trainner_empresarial' }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || typeof value == "undefined")
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato telefonoMobil_trainner_empresarial no tiene un formato de número de teléfono válido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Trainers.prototype, "telefonoMobil_trainner_empresarial", void 0);
__decorate([
    Expose({ name: 'telefonoResidencia_trainner' }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || typeof value == "undefined")
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato telefonoResidencia_trainner no tiene un formato de número de teléfono válido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Trainers.prototype, "telefonoResidencia_trainner", void 0);
__decorate([
    Expose({ name: 'telefonoEmpresa_trainner' }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || typeof value == "undefined")
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato telefonoEmpresa_trainner no tiene un formato de número de teléfono válido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Trainers.prototype, "telefonoEmpresa_trainner", void 0);
__decorate([
    Expose({ name: 'jornada_trainner' }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value) || typeof value == "undefined")
        return value;
    else
        throw { status: 400, message: `El dato jornada_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainers.prototype, "jornada_trainner", void 0);
