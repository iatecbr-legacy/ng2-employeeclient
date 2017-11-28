import * as models from './models';
export interface MonthlyReimbursementStatement {
    entityName?: string;
    employeeCode?: string;
    employeeName?: string;
    departmentName?: string;
    entries?: Array<models.MonthlyReimbursementStatementEntry>;
    netValue?: number;
    internalAccount?: models.InternalAccount;
}
