import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber} from 'class-validator';

export class Trainers {

    @Expose({ name: 'id_trainner' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) ||  typeof value == "undefined") return Math.floor(value); else throw {status: 400, message:`El dato id_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    id_trainner: number;

    @Expose({ name: 'nombre_trainner' })
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value) ||  typeof value == "undefined") return value; else throw {status: 400, message:`El dato nombre_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    nombre_trainner: string;

    @Expose({ name: 'email_trainner_personal' })
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value) ||  typeof value == "undefined") return value; else throw {status: 400, message:`El dato email_trainner_personal incumple los parametros acordados`};},{ toClassOnly: true})
    email_trainner_personal: string;

    @Expose({ name: 'email_trainner_corporativo' })
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value) ||  typeof value == "undefined") return value; else throw {status: 400, message:`El dato email_trainner_corporativo incumple los parametros acordados`};},{ toClassOnly: true})
    email_trainner_corporativo: string;

    @Expose({ name: 'telefonoMobil_trainner_personal' })
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) ||  typeof value == "undefined") return Math.floor(value); else throw {status: 400, message:`El dato telefonoMobil_trainner_personal no tiene un formato de número de teléfono válido`};},{ toClassOnly: true})
    telefonoMobil_trainner_personal: number;

    @Expose({ name: 'telefonoMobil_trainner_empresarial' })
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) ||  typeof value == "undefined") return Math.floor(value); else throw {status: 400, message:`El dato telefonoMobil_trainner_empresarial no tiene un formato de número de teléfono válido`};},{ toClassOnly: true})
    telefonoMobil_trainner_empresarial: number;

    @Expose({ name: 'telefonoResidencia_trainner' })
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) ||  typeof value == "undefined") return Math.floor(value); else throw {status: 400, message:`El dato telefonoResidencia_trainner no tiene un formato de número de teléfono válido`};},{ toClassOnly: true})
    telefonoResidencia_trainner: number;

    @Expose({ name: 'telefonoEmpresa_trainner' })
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) ||  typeof value == "undefined") return Math.floor(value); else throw {status: 400, message:`El dato telefonoEmpresa_trainner no tiene un formato de número de teléfono válido`};},{ toClassOnly: true})
    telefonoEmpresa_trainner: number;

    @Expose({ name: 'jornada_trainner' })
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value) ||  typeof value == "undefined") return value; else throw {status: 400, message:`El dato jornada_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    jornada_trainner: string;


    constructor(
        ID: number,
        nombre: string,
        email_personal: string,
        email_empresarial: string,
        celular_personal: number,
        celular_empresarial: number,
        telefono: number,
        telefono_empresarial: number,
        jornada: string
    ) {
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