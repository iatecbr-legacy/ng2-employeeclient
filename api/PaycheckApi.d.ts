import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class PaycheckApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    getMonthlyPaycheckListing(kind?: string, count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.PaycheckListingItem>>;
    getPaycheck(kind: string, period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<models.Paycheck>;
    getMonthlyPaycheckListingWithHttpInfo(kind?: string, count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
    getPaycheckWithHttpInfo(kind: string, period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<Response>;
}
