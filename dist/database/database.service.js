"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const promise_1 = require("mysql2/promise");
const ssh2_1 = require("ssh2");
const dotenv = require("dotenv");
dotenv.config();
let DatabaseService = class DatabaseService {
    getConnection() {
        let clientChannel;
        let mysqlConfig = {
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: parseInt(process.env.MYSQL_PORT),
            stream: typeof clientChannel,
        };
        let sshTunnelConfig = {
            username: process.env.SSH_USERNAME,
            password: process.env.SSH_PASSWORD,
            host: process.env.SSH_HOST,
            port: parseInt(process.env.SSH_PORT)
        };
        return new Promise((resolve, reject) => {
            const ssh = new ssh2_1.Client();
            try {
                ssh.on('ready', function () {
                    ssh.forwardOut('127.0.0.1', 8000, '127.0.0.1', 9876, async function (err, stream) {
                        if (err) {
                            reject(err);
                        }
                        ;
                        try {
                            mysqlConfig.stream = stream;
                            const connection = await (0, promise_1.createConnection)(mysqlConfig);
                            const objConnection = {
                                mysqlConnection: connection,
                                sshConnection: ssh
                            };
                            resolve(objConnection);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                })
                    .connect(sshTunnelConfig);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    getSSH() {
        return new Promise((resolve, reject) => {
            let sshTunnelConfig = {
                username: process.env.SSH_USERNAME,
                password: process.env.SSH_PASSWORD,
                host: process.env.SSH_HOST,
                port: parseInt(process.env.SSH_PORT)
            };
            const ssh = new ssh2_1.Client();
            try {
                ssh.on('ready', function () {
                    ssh.forwardOut('127.0.0.1', 8000, '127.0.0.1', 9876, async function (err, stream) {
                        if (err) {
                            reject(err);
                        }
                        ;
                        try {
                            resolve(stream);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                })
                    .connect(sshTunnelConfig);
            }
            catch (error) {
                reject(error);
            }
        });
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map