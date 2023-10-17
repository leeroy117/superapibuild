import { TConnection } from 'index';
export declare class DatabaseService {
    getConnection(): Promise<TConnection>;
    getSSH(): Promise<unknown>;
}
