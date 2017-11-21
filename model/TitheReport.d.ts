import * as models from './models';
export interface TitheReport {
    entries?: Array<models.TitheReportEntry>;
    total?: number;
    titheValue?: number;
    suggestedOfferingValue?: number;
}
