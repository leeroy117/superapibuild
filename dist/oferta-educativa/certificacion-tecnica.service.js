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
exports.CertificacionTecnicaService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let CertificacionTecnicaService = class CertificacionTecnicaService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async get() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseCertificacionesTecnicas = await mysqlConnection
            .execute(`
                                    SELECT 
                                        id,
                                        nombre,
                                        descripcion,
                                        activo
                                    FROM
                                        oferta_edu_certificaciones_tecnicas;

                                `, []);
        mysqlConnection.end();
        sshConnection.end();
        let certificacionesTecnicas = responseCertificacionesTecnicas[0];
        const materialesDescargables = await this.getMaterialesDescargables();
        const competencias = await this.getCompetencias();
        for (let certificacionTecnica of certificacionesTecnicas) {
            certificacionTecnica.materiales_descargables = materialesDescargables
                .filter(material => material.id_certificacion_tecnica === certificacionTecnica.id);
            certificacionTecnica.competencias = competencias
                .filter(competencia => competencia.id_certificacion_tecnica === certificacionTecnica.id);
        }
        return certificacionesTecnicas;
    }
    async getMaterialesDescargables() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseMaterialesDescargablesCT = await mysqlConnection
            .execute(`
                                                            SELECT 
                                                                oectdes.id,
                                                                oectdes.id_certificacion_tecnica,
                                                                oectdes.id_tipo,
                                                                oectd.tipo,
                                                                oectdes.ruta
                                                            FROM 
                                                                oferta_edu_certificaciones_tecnicas_descargables oectdes
                                                            INNER JOIN oferta_edu_cat_tipo_descargable oectd ON oectd.id = oectdes.id_tipo	
                                                        `, []);
        mysqlConnection.end();
        sshConnection.end();
        const materialesDescargablesCT = responseMaterialesDescargablesCT[0];
        return materialesDescargablesCT;
    }
    async getCompetencias() {
        const responseConnection = await this.databaseService.getConnection();
        const mysqlConnection = responseConnection.mysqlConnection;
        const sshConnection = responseConnection.sshConnection;
        const responseCompetenciasCT = await mysqlConnection
            .execute(`
                                                            SELECT 
                                                                id, 
                                                                id_certificacion_tecnica, 
                                                                competencia 
                                                            FROM 
                                                                oferta_edu_certificaciones_tecnicas_competencias;
                                                        `, []);
        mysqlConnection.end();
        sshConnection.end();
        const competenciasCT = responseCompetenciasCT[0];
        return competenciasCT;
    }
};
exports.CertificacionTecnicaService = CertificacionTecnicaService;
exports.CertificacionTecnicaService = CertificacionTecnicaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], CertificacionTecnicaService);
//# sourceMappingURL=certificacion-tecnica.service.js.map