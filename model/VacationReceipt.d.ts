import * as models from './models';
export interface VacationReceipt {
    employeeName?: string;
    departmentName?: string;
    amounts?: Array<models.AmountsEntry>;
    totalEarnings?: number;
    totalDiscounts?: number;
    netValue?: number;
    acquisitionPeriod?: models.VacationReceiptAcquisitionPeriod;
    vacationPeriod?: models.VacationReceiptAcquisitionPeriod;
    allowancePeriod?: models.VacationReceiptAcquisitionPeriod;
}
