import * as models from './models';
export interface MonthlyDeclaration {
    remarks?: string;
    value?: any;
    entries?: Array<models.MonthlyDeclarationEntry>;
}
