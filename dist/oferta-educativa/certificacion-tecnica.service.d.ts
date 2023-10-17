import { TCertificacionTecnica, TCompetenciaCT, TMaterialDescargableCT } from 'index';
import { DatabaseService } from 'src/database/database.service';
export declare class CertificacionTecnicaService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    get(): Promise<TCertificacionTecnica[]>;
    getMaterialesDescargables(): Promise<TMaterialDescargableCT[]>;
    getCompetencias(): Promise<TCompetenciaCT[]>;
}
