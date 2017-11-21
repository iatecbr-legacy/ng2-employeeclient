import * as models from './models';
export interface ContactInfo {
    address?: models.ContactInfoAddress;
    phones?: Array<models.ContactInfoPhone>;
    email?: string;
}
