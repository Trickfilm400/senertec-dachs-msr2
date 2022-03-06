export interface KeyListEntity {
    key: string;
    doc: string;
    unit: (x: string) => boolean | string | number;
}

export interface KeyListEntityResponse {
    key?: KeyListEntity;
    rawValue?: string;
    //HTTP VALUE RESPONSE
    value: string | boolean | number;
}



/**

 "key": "",
 "doc": "",
 "unit": Number


 */
