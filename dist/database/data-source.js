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
exports.DatabaseSource = void 0;
const dotenv = require("dotenv");
const apikey_entity_1 = require("../entity/apikey.entity");
const common_1 = require("@nestjs/common");
const ssh2_1 = require("ssh2");
const typeorm_1 = require("typeorm");
dotenv.config();
let DatabaseSource = class DatabaseSource {
    constructor() {
        this.sshConfig = {
            username: process.env.SSH_USERNAME,
            password: process.env.SSH_PASSWORD,
            host: process.env.SSH_HOST,
            port: parseInt(process.env.SSH_PORT)
        };
    }
    createDatabaseConnection() {
        let clientChannel;
        let mysqlConfig = {
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: parseInt(process.env.MYSQL_PORT),
            stream: typeof clientChannel,
        };
        const sshConnection = new ssh2_1.Client();
        const sshClient = sshConnection.connect(this.sshConfig);
        sshConnection.on('ready', () => {
            sshConnection.forwardOut('127.0.0.1', 8000, '127.0.0.1', 9876, (err, channel) => {
                console.log("🚀 ~ file: data-source.ts:63 ~ DatabaseSource ~ sshConnection.forwardOut ~ channel:", channel);
                let mysqlConfig = {
                    type: 'mysql',
                    port: parseInt(process.env.MYSQL_PORT),
                    username: process.env.MYSQL_USER,
                    password: process.env.MYSQL_PASSWORD,
                    database: process.env.MYSQL_DATABASE,
                    synchronize: false,
                    entities: [apikey_entity_1.ApiKey],
                    connectorPackage: 'mysql2'
                };
                const AppDataSource = new typeorm_1.DataSource(mysqlConfig);
                AppDataSource
                    .initialize()
                    .then((data) => {
                    console.log("🚀 ~ file: data-source.ts:81 ~ DatabaseSource ~ .then ~ data:", data);
                })
                    .catch((err) => console.log('err', err));
            });
        });
    }
};
exports.DatabaseSource = DatabaseSource;
exports.DatabaseSource = DatabaseSource = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseSource);
//# sourceMappingURL=data-source.js.map