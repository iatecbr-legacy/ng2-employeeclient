import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ReportsApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    getIncomeReport(year: number, extraHttpRequestParams?: any): Observable<models.IncomeReport>;
    getTitheReport(period: number, extraHttpRequestParams?: any): Observable<models.TitheReport>;
    listIncomeReports(extraHttpRequestParams?: any): Observable<Array<models.IncomeReportListingItem>>;
    listTitheReports(extraHttpRequestParams?: any): Observable<Array<models.TitheReportListingItem>>;
    getIncomeReportWithHttpInfo(year: number, extraHttpRequestParams?: any): Observable<Response>;
    getTitheReportWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
    listIncomeReportsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    listTitheReportsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
