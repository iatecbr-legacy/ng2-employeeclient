import * as models from './models';
export interface VacationReceipt {
    employee?: models.EmployeeLite;
    amounts?: Array<models.AmountsEntry>;
    totalEarnings?: number;
    totalDiscounts?: number;
    netValue?: number;
    acquisitionPeriod?: models.DateRange;
    vacationPeriod?: models.DateRange;
    bonusPeriod?: models.DateRange;
}
