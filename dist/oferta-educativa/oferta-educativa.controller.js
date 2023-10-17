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
exports.OfertaEducativaController = void 0;
const estudio_oficial_service_1 = require("./estudio-oficial.service");
const educacion_ejecutiva_service_1 = require("./educacion-ejecutiva.service");
const certificacion_tecnica_service_1 = require("./certificacion-tecnica.service");
const common_1 = require("@nestjs/common");
let OfertaEducativaController = class OfertaEducativaController {
    constructor(certificacionTecnicaService, educacionEjecutivaService, estudioOficialService) {
        this.certificacionTecnicaService = certificacionTecnicaService;
        this.educacionEjecutivaService = educacionEjecutivaService;
        this.estudioOficialService = estudioOficialService;
    }
    getCertificacionesTecnicas() {
        const response = this.certificacionTecnicaService.get();
        return response;
    }
    getEducacionEjecutiva() {
        const response = this.educacionEjecutivaService.get();
        return response;
    }
    getEstudiosOficiales() {
        const response = this.estudioOficialService.get();
        return response;
    }
};
exports.OfertaEducativaController = OfertaEducativaController;
__decorate([
    (0, common_1.Get)('certificaciones-tecnicas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OfertaEducativaController.prototype, "getCertificacionesTecnicas", null);
__decorate([
    (0, common_1.Get)('educacion-ejecutiva'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OfertaEducativaController.prototype, "getEducacionEjecutiva", null);
__decorate([
    (0, common_1.Get)('estudios-oficiales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OfertaEducativaController.prototype, "getEstudiosOficiales", null);
exports.OfertaEducativaController = OfertaEducativaController = __decorate([
    (0, common_1.Controller)('oferta-educativa'),
    __metadata("design:paramtypes", [certificacion_tecnica_service_1.CertificacionTecnicaService,
        educacion_ejecutiva_service_1.EducacionEjecutivaService,
        estudio_oficial_service_1.EstudioOficialService])
], OfertaEducativaController);
//# sourceMappingURL=oferta-educativa.controller.js.map