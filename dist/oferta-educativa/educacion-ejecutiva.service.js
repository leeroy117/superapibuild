"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionEjecutivaService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let EducacionEjecutivaService = class EducacionEjecutivaService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async get() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseEducacionEjecutiva = await mysqlConnection
            .execute(`
                                    SELECT
                                        id,
                                        nombre,
                                        descripcion,
                                        activo 
                                    FROM
                                        oferta_edu_educacion_ejecutiva;

                                `, []);
        mysqlConnection.end();
        sshConnection.end();
        const educacionEjecutiva = responseEducacionEjecutiva[0];
        const especialidades = await this.getEspecialidades();
        for (const nivel of educacionEjecutiva) {
            nivel.especialidades = especialidades.filter(especialidad => especialidad.id_educacion_ejecutiva === nivel.id);
        }
        return educacionEjecutiva;
    }
    async getEspecialidades() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseEspecialidades = await mysqlConnection
            .execute(`
                                    SELECT 
                                        id,
                                        id_educacion_ejecutiva,
                                        nombre,
                                        descripcion, 
                                        activo
                                    FROM 
                                        oferta_edu_educacion_ejecutiva_cursos;
                                `, []);
        mysqlConnection.end();
        sshConnection.end();
        const especialidades = responseEspecialidades[0];
        const competencias = await this.getCompetenciasEspecialidades();
        const materialesDescargables = await this.getMaterialesDescargablesEspecialidades();
        for (const especialidad of especialidades) {
            especialidad.competencias = competencias
                .filter(competencia => competencia.id_educacion_ejecutiva_curso === especialidad.id);
            especialidad.materiales_descargables = materialesDescargables
                .filter(material => material.id_educacion_ejecutiva_curso === especialidad.id);
        }
        return especialidades;
    }
    async getCompetenciasEspecialidades() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseCompetencias = await mysqlConnection
            .execute(`
                                    SELECT 
                                        id,
                                        id_educacion_ejecutiva_curso,
                                        competencia
                                    FROM
                                        oferta_edu_educacion_ejecutiva_cursos_competencias;
                                `, []);
        mysqlConnection.end();
        sshConnection.end();
        const competencias = responseCompetencias[0];
        return competencias;
    }
    async getMaterialesDescargablesEspecialidades() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseMaterialDescargable = await mysqlConnection
            .execute(`
                                    SELECT
                                        oeeecd.id,
                                        oeeecd.id_educacion_ejecutiva_curso,
                                        oeeecd.id_tipo,
                                        oectd.tipo,
                                        oeeecd.ruta
                                    FROM
                                        oferta_edu_educacion_ejecutiva_cursos_descargables oeeecd
                                    INNER JOIN oferta_edu_cat_tipo_descargable oectd ON oectd.id = oeeecd.id_tipo
                                `, []);
        mysqlConnection.end();
        sshConnection.end();
        const materialesDescargables = responseMaterialDescargable[0];
        return materialesDescargables;
    }
};
exports.EducacionEjecutivaService = EducacionEjecutivaService;
exports.EducacionEjecutivaService = EducacionEjecutivaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], EducacionEjecutivaService);
//# sourceMappingURL=educacion-ejecutiva.service.js.map