export interface KeyListEntity {
    key: string;
    doc: string;
    unit: (x: string) => boolean | string | number;
}


/**

 "key": "",
 "doc": "",
 "unit": Number


 */
