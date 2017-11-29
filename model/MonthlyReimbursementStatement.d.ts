import * as models from './models';
export interface MonthlyReimbursementStatement {
    employee?: models.EmployeeLite;
    entries?: Array<models.MonthlyReimbursementStatementEntry>;
    netValue?: number;
    internalAccount?: models.InternalAccount;
}
