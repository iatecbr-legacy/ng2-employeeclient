"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var ReimbursementApi = (function () {
    function ReimbursementApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://ws-rh-online-dev.sdasystems.org';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    ReimbursementApi.prototype.getMonthlyStatement = function (period, extraHttpRequestParams) {
        return this.getMonthlyStatementWithHttpInfo(period, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    ReimbursementApi.prototype.getTravelStatement = function (statementId, extraHttpRequestParams) {
        return this.getTravelStatementWithHttpInfo(statementId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    ReimbursementApi.prototype.listMonthlyStatements = function (count, maxperiod, extraHttpRequestParams) {
        return this.listMonthlyStatementsWithHttpInfo(count, maxperiod, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    ReimbursementApi.prototype.getMonthlyStatementWithHttpInfo = function (period, extraHttpRequestParams) {
        var path = this.basePath + '/reimbursement/monthly/statements/${period}'
            .replace('${' + 'period' + '}', String(period));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (period === null || period === undefined) {
            throw new Error('Required parameter period was null or undefined when calling getMonthlyStatement.');
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ReimbursementApi.prototype.getTravelStatementWithHttpInfo = function (statementId, extraHttpRequestParams) {
        var path = this.basePath + '/reimbursement/travel/statements/${statementId}'
            .replace('${' + 'statementId' + '}', String(statementId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (statementId === null || statementId === undefined) {
            throw new Error('Required parameter statementId was null or undefined when calling getTravelStatement.');
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ReimbursementApi.prototype.listMonthlyStatementsWithHttpInfo = function (count, maxperiod, extraHttpRequestParams) {
        var path = this.basePath + '/reimbursement/monthly/statements';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (count !== undefined) {
            queryParameters.set('count', count);
        }
        if (maxperiod !== undefined) {
            queryParameters.set('maxperiod', maxperiod);
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ReimbursementApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [http_1.Http, String, configuration_1.Configuration])
    ], ReimbursementApi);
    return ReimbursementApi;
}());
exports.ReimbursementApi = ReimbursementApi;
//# sourceMappingURL=ReimbursementApi.js.map