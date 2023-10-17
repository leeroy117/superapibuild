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
exports.ApikeyService = void 0;
const database_service_1 = require("../../database/database.service");
const common_1 = require("@nestjs/common");
let ApikeyService = class ApikeyService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async get(apiKey) {
        const responseDatabase = await this.databaseService.getConnection();
        const mysqlConnection = responseDatabase.mysqlConnection;
        const sshConnection = responseDatabase.sshConnection;
        const response = await mysqlConnection.execute(`
            SELECT * FROM tb_apikeys_superapp WHERE apikey = ? and estatus = 1; `, [apiKey]);
        console.log('response', response);
        const apikeyResponse = response[0][0]?.apikey;
        mysqlConnection.end();
        sshConnection.end();
        if (typeof apikeyResponse == 'undefined') {
            return false;
        }
        return true;
    }
};
exports.ApikeyService = ApikeyService;
exports.ApikeyService = ApikeyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ApikeyService);
//# sourceMappingURL=apikey.service.js.map