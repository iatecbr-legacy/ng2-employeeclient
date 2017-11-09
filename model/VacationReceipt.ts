/**
 * Employee Portal
 * IATec Employee Portal API
 *
 * OpenAPI spec version: 1.0.0-preview-5
 * Contact: andre.guilherme@iatec.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface VacationReceipt {
    employeeName?: string;

    departmentName?: string;

    amounts?: Array<models.AmountsEntry>;

    totalEarnings?: number;

    totalDiscounts?: number;

    netValue?: number;

    acquisitionPeriod?: models.VacationReceiptAcquisitionPeriod;

    vacationPeriod?: models.VacationReceiptAcquisitionPeriod;

    allowancePeriod?: models.VacationReceiptAcquisitionPeriod;

}
