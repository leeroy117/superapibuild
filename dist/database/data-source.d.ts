export declare class DatabaseSource {
    constructor();
    sshConfig: {
        username: string;
        password: string;
        host: string;
        port: number;
    };
    createDatabaseConnection(): void;
}
