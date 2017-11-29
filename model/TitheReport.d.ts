import * as models from './models';
export interface TitheReport {
    employee?: models.EmployeeLite;
    entries?: Array<models.TitheReportEntry>;
    entries13th?: Array<models.TitheReportEntry>;
    titheValue?: number;
    suggestedOfferingValue?: number;
}
