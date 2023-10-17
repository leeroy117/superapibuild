import { EstudioOficialService } from './estudio-oficial.service';
import { EducacionEjecutivaService } from './educacion-ejecutiva.service';
import { CertificacionTecnicaService } from './certificacion-tecnica.service';
export declare class OfertaEducativaController {
    private certificacionTecnicaService;
    private educacionEjecutivaService;
    private estudioOficialService;
    constructor(certificacionTecnicaService: CertificacionTecnicaService, educacionEjecutivaService: EducacionEjecutivaService, estudioOficialService: EstudioOficialService);
    getCertificacionesTecnicas(): any;
    getEducacionEjecutiva(): any;
    getEstudiosOficiales(): any;
}
