import { TCompetenciaEE, TEducacionEjecutiva, TEspecialidadEE, TMaterialDescargableEE } from 'index';
import { DatabaseService } from 'src/database/database.service';
export declare class EducacionEjecutivaService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    get(): Promise<TEducacionEjecutiva[]>;
    getEspecialidades(): Promise<TEspecialidadEE[]>;
    getCompetenciasEspecialidades(): Promise<TCompetenciaEE[]>;
    getMaterialesDescargablesEspecialidades(): Promise<TMaterialDescargableEE[]>;
}
