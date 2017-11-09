import * as models from './models';
export interface PaycheckListingItem {
    kind?: PaycheckListingItem.KindEnum;
    period?: models.PeriodId;
    value?: number;
    url?: string;
}
export declare namespace PaycheckListingItem {
    enum KindEnum {
        Monthly,
        _13th,
    }
}
