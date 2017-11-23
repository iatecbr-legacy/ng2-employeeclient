import * as models from './models';
export interface ContactInfo {
    address?: models.ContactInfoAddress;
    homePhone?: models.ContactInfoPhone;
    mobilePhone?: models.ContactInfoPhone;
    email?: string;
}
