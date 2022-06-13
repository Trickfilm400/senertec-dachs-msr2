export interface KeyListEntity {
    key: string;
    doc: string;
    unit: (x: string) => boolean | string | number;
}

export interface KeyListEntityResponse<V> {
    key?: KeyListEntity;
    rawValue?: string;
    //HTTP VALUE RESPONSE
    value: V;
}



/**

 "key": "",
 "doc": "",
 "unit": Number


 */
