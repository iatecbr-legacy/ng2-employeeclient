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
    getReimbursementListing(kind?: string, count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.InlineResponse200>>;
    getStandardReimbursement(period: number, extraHttpRequestParams?: any): Observable<models.StandardReimbursement>;
    getTravelReimbursement(period: number, extraHttpRequestParams?: any): Observable<models.TravelReimbursement>;
    getReimbursementListingWithHttpInfo(kind?: string, count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
    getStandardReimbursementWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
    getTravelReimbursementWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
}
