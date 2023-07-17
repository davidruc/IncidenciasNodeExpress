CREATE DATABASE incidencias_campus;
USE incidencias_campus;
CREATE TABLE tipo_incidencia (
    id_tipo_incidencia INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo_incidencia VARCHAR(20) NOT NULL 
);
CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo_categoria VARCHAR(20) NOT NULL 
);
CREATE TABLE reporte_incidencia (
    id_reporte INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fecha_reporte DATE NOT NULL
);
CREATE TABLE area (
    id_area INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_area VARCHAR(20) NOT NULL
);
CREATE TABLE trainners (
    id_trainner INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_trainner VARCHAR(80) NOT NULL,
    email_trainner_personal VARCHAR(30) NOT NULL,
    email_trainner_corporativo VARCHAR(30) NOT NULL,
    telefonoMobil_trainner_personal VARCHAR(50) NOT NULL,
    telefonoMobil_trainner_empresarial VARCHAR(50) NOT NULL,
    telefonoResidencia_trainner VARCHAR(50),
    telefonoEmpresa_trainner VARCHAR(50) NOT NULL,
    jornada_trainner VARCHAR(20) NOT NULL
);
CREATE TABLE estado (
    id_estado INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_estado VARCHAR(20) NOT NULL
);
CREATE TABLE pantalla (
    id_pantalla INT PRIMARY KEY NOT NULL,
    marca_pantalla VARCHAR(20) NOT NULL,
    estado_pantalla INT NOT NULL,
    FOREIGN KEY (estado_pantalla) REFERENCES estado(id_estado)
);
CREATE TABLE torre (
    id_torre INT PRIMARY KEY NOT NULL,
    marca_torre VARCHAR(20) NOT NULL,
    estado_torre INT NOT NULL,
    FOREIGN KEY (estado_torre) REFERENCES estado(id_estado)
);
CREATE TABLE teclado (
    id_teclado INT PRIMARY KEY NOT NULL,
    marca_teclado VARCHAR(20) NOT NULL,
    estado_teclado INT NOT NULL,
    FOREIGN KEY (estado_teclado) REFERENCES estado(id_estado)
);
CREATE TABLE mouse (
    id_mouse INT PRIMARY KEY NOT NULL,
    marca_mouse VARCHAR(20) NOT NULL,
    estado_mouse INT NOT NULL,
    FOREIGN KEY (estado_mouse) REFERENCES estado(id_estado)
);
CREATE TABLE diadema (
    id_diadema INT PRIMARY KEY NOT NULL,
    marca_diadema VARCHAR(20) NOT NULL,
    estado_diadema INT NOT NULL,
    FOREIGN KEY (estado_diadema) REFERENCES estado(id_estado)
);
CREATE TABLE salon (
    id_salon INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_salon VARCHAR(20) NOT NULL,
    trainner_salon INT NOT NULL,
    area_salon INT NOT NULL,
    FOREIGN KEY (area_salon) REFERENCES area(id_area),
    FOREIGN KEY (trainner_salon) REFERENCES trainners(id_trainner)
);

CREATE TABLE equipo (
    id_equipo INT PRIMARY KEY NOT NULL,
    pantalla_equipo INT NOT NULL,
    torre_equipo INT NOT NULL,
    teclado_equipo INT NOT NULL,
    mouse_equipo INT NOT NULL,
    diadema_equipo INT NOT NULL,
    salon_equipo INT NOT NULL,
    FOREIGN KEY (pantalla_equipo) REFERENCES pantalla(id_pantalla),
    FOREIGN KEY (torre_equipo) REFERENCES torre(id_torre),
    FOREIGN KEY (teclado_equipo) REFERENCES teclado(id_teclado),
    FOREIGN KEY (mouse_equipo) REFERENCES mouse(id_mouse),
    FOREIGN KEY (diadema_equipo) REFERENCES diadema(id_diadema),
    FOREIGN KEY (salon_equipo) REFERENCES salon(id_salon)
);
CREATE TABLE incidencia (
    id_incidencia INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    categoria_incidencia INT NOT NULL,
    tipo_incidencia INT NOT NULL,
    descripcion_incidencia VARCHAR(200),
    fecha_incidencia INT NOT NULL,
    equipo_indicencia INT NOT NULL,
    lugar_incidencia INT NOT NULL,
    trainner_reporta_incidencia INT NOT NULL,
    FOREIGN KEY (trainner_reporta_incidencia) REFERENCES trainners(id_trainner),
    FOREIGN KEY (categoria_incidencia) REFERENCES categoria(id_categoria),
    FOREIGN KEY (tipo_incidencia) REFERENCES tipo_incidencia(id_tipo_incidencia),
    FOREIGN KEY (fecha_incidencia) REFERENCES reporte_incidencia(id_reporte),
    FOREIGN KEY (equipo_indicencia) REFERENCES equipo(id_equipo),
    FOREIGN KEY (lugar_incidencia) REFERENCES salon(id_salon)
);
