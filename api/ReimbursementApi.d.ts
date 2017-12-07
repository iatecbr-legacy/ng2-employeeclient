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
    getMonthlyStatement(period: number, extraHttpRequestParams?: any): Observable<models.MonthlyReimbursementStatement>;
    getTravelStatement(statementId: number, extraHttpRequestParams?: any): Observable<models.TravelReimbursementStatement>;
    listMonthlyStatements(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.MonthlyReimbursementStatementListingItem>>;
    getMonthlyStatementWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
    getTravelStatementWithHttpInfo(statementId: number, extraHttpRequestParams?: any): Observable<Response>;
    listMonthlyStatementsWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
}
