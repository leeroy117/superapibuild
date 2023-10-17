import { DatabaseService } from 'src/database/database.service';
export declare class ApikeyService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    get(apiKey: string): Promise<boolean>;
}
