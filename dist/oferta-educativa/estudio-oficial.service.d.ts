import { TCarreraComptenciaEO, TCarreraEO, TCarreraEspecialidadEO, TCarreraEspecialidadMaterialDescargableEO, TCarreraEspecialidadRequisitoEO, TCarreraEspeciliadCompetenciaEO, TCarreraMaterialDescargableEO, TCarreraRequisitoEO, TCompetenciaEO, TEstudioOficial } from 'index';
import { DatabaseService } from 'src/database/database.service';
export declare class EstudioOficialService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    get(): Promise<TEstudioOficial[]>;
    getEstudiosOficialesCompetencias(): Promise<TCompetenciaEO[]>;
    getCarreras(): Promise<TCarreraEO[]>;
    getCarrerasCompetencias(): Promise<TCarreraComptenciaEO[]>;
    getCarrerasRequisitos(): Promise<TCarreraRequisitoEO[]>;
    getCarrerasMaterialesDescargables(): Promise<TCarreraMaterialDescargableEO[]>;
    getEspecialidades(): Promise<TCarreraEspecialidadEO[]>;
    getEspecialidadesCompetencias(): Promise<TCarreraEspeciliadCompetenciaEO[]>;
    getEspecialidadesRequisitos(): Promise<TCarreraEspecialidadRequisitoEO[]>;
    getEspecialidadesMaterialesDescargables(): Promise<TCarreraEspecialidadMaterialDescargableEO[]>;
}
