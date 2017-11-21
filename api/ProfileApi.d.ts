import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ProfileApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    getAccountInfo(extraHttpRequestParams?: any): Observable<Array<models.ContactInfo>>;
    setAccountInfo(contactInfo?: models.ContactInfo, extraHttpRequestParams?: any): Observable<{}>;
    getAccountInfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    setAccountInfoWithHttpInfo(contactInfo?: models.ContactInfo, extraHttpRequestParams?: any): Observable<Response>;
}
