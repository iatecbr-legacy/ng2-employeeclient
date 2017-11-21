import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ReimbursementApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    getMonthlyDeclaration(period: number, extraHttpRequestParams?: any): Observable<models.MonthlyDeclaration>;
    listMonthlyDeclarations(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.MonthlyDeclarationListingItem>>;
    getMonthlyDeclarationWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
    listMonthlyDeclarationsWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
}
