import * as models from './models';
export interface TravelReimbursementStatement {
    employee?: models.EmployeeLite;
    entries?: Array<models.TravelReimbursementStatementEntry>;
    total?: number;
    depositInfo?: models.DepositInfo;
}
