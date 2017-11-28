import * as models from './models';
export interface Paycheck {
    entity?: models.Entity;
    employee?: models.Employee;
    period?: string;
    amounts?: Array<models.AmountsEntry>;
    depositInfo?: string;
    additionalInfo?: Array<string>;
    baseSalary?: number;
    inssBalance?: number;
    fgtsBase?: number;
    currentMonthFgts?: number;
    grossIrrfBase?: number;
    irrfDeduction?: number;
    netIrrfBase?: number;
    inssClass?: number;
    inssValueDescription?: string;
    inssBase?: number;
    totalEarnings?: number;
    totalDiscounts?: number;
    netValue?: number;
    internalAccountInfo?: models.InternalAccount;
}
