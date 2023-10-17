import { DatabaseSource } from './database/data-source';
import { DatabaseService } from './database/database.service';
export declare class AppService {
    private databaseService;
    private databaseSource;
    constructor(databaseService: DatabaseService, databaseSource: DatabaseSource);
    getHello(): string;
    testDatabase(): string;
}
