import { ApikeyService } from './apikey.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
export declare class ApikeyGuard implements CanActivate {
    private apiKeyService;
    private reflector;
    constructor(apiKeyService: ApikeyService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private extractApiKeyFromHeader;
}
