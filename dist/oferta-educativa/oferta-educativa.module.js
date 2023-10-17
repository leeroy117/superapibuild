"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfertaEducativaModule = void 0;
const common_1 = require("@nestjs/common");
const oferta_educativa_controller_1 = require("./oferta-educativa.controller");
const certificacion_tecnica_service_1 = require("./certificacion-tecnica.service");
const database_module_1 = require("../database/database.module");
const educacion_ejecutiva_service_1 = require("./educacion-ejecutiva.service");
const estudio_oficial_service_1 = require("./estudio-oficial.service");
let OfertaEducativaModule = class OfertaEducativaModule {
};
exports.OfertaEducativaModule = OfertaEducativaModule;
exports.OfertaEducativaModule = OfertaEducativaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [oferta_educativa_controller_1.OfertaEducativaController],
        providers: [certificacion_tecnica_service_1.CertificacionTecnicaService, educacion_ejecutiva_service_1.EducacionEjecutivaService, estudio_oficial_service_1.EstudioOficialService],
    })
], OfertaEducativaModule);
//# sourceMappingURL=oferta-educativa.module.js.map