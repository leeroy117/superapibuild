"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const apikey_service_1 = require("./guards/apikey/apikey.service");
const core_1 = require("@nestjs/core");
const apikey_guard_1 = require("./guards/apikey/apikey.guard");
require("reflect-metadata");
const dotenv = require("dotenv");
const oferta_educativa_module_1 = require("./oferta-educativa/oferta-educativa.module");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            oferta_educativa_module_1.OfertaEducativaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            apikey_service_1.ApikeyService,
            {
                provide: core_1.APP_GUARD,
                useClass: apikey_guard_1.ApikeyGuard
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map