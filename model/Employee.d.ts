import * as models from './models';
export interface Employee {
    code?: string;
    name?: string;
    position?: string;
    document?: models.EmployeeDocument;
    address?: string;
    department?: string;
    isReligious?: boolean;
    admissionDate?: Date;
}
