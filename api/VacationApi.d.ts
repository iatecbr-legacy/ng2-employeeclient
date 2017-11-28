import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class VacationApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    getVacationReceipt(period: number, extraHttpRequestParams?: any): Observable<models.VacationReceipt>;
    listVacationReceipts(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.VacationReceiptListingItem>>;
    getVacationReceiptWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response>;
    listVacationReceiptsWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response>;
}
