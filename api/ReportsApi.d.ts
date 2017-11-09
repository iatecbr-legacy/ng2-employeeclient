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
    getIncomeReport(year: number, extraHttpRequestParams?: any): Observable<Array<models.InlineResponse2002>>;
    getIncomeReportListing(extraHttpRequestParams?: any): Observable<Array<models.InlineResponse2002>>;
    getTitheReport(period: number, extraHttpRequestParams?: any): Observable<models.VacationReceipt>;
    getTitheReportListing(extraHttpRequestParams?: any): Observable<Array<models.InlineResponse2003>>;
    getIncomeReportWithHttpInfo(year: number, extraHttpRequestParams?: any): Observable<Response>;
    getIncomeReportListingWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    getTitheReportWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
    getTitheReportListingWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
