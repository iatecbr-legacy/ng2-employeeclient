import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class PaychecksApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    get13thPaycheck(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<models.Paycheck>;
    getPaycheck(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<models.Paycheck>;
    list13thPaychecks(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.PaycheckListingItem>>;
    listStandardPaychecks(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.PaycheckListingItem>>;
    get13thPaycheckWithHttpInfo(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    getPaycheckWithHttpInfo(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    list13thPaychecksWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
    listStandardPaychecksWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
}
