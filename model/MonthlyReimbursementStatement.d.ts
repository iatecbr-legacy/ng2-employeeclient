import * as models from './models';
export interface MonthlyReimbursementStatement {
    employee?: models.EmployeeLite;
    entries?: Array<models.MonthlyReimbursementStatementEntry>;
    total?: number;
    internalAccount?: models.InternalAccount;
}
