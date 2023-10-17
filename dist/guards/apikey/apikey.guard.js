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
exports.ApikeyGuard = void 0;
const apikey_service_1 = require("./apikey.service");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const public_access_1 = require("../../common/public_access");
let ApikeyGuard = class ApikeyGuard {
    constructor(apiKeyService, reflector) {
        this.apiKeyService = apiKeyService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_access_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const apiKey = this.extractApiKeyFromHeader(request);
        console.log("🚀 ~ file: apikey.guard.ts:18 ~ ApikeyGuard ~ apiKey:", apiKey);
        if (typeof apiKey == 'undefined') {
            return false;
        }
        return this.apiKeyService.get(apiKey);
    }
    extractApiKeyFromHeader(request) {
        return request.headers['ag-api-key'];
    }
};
exports.ApikeyGuard = ApikeyGuard;
exports.ApikeyGuard = ApikeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [apikey_service_1.ApikeyService, core_1.Reflector])
], ApikeyGuard);
//# sourceMappingURL=apikey.guard.js.map