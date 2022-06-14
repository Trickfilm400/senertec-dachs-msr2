import {ClientOptions} from "./ClientOptions";
import {IReadKeyList} from "./IReadKeyList";
import {IWriteKeyList} from "./IWriteKeyList";
import {KeyListEntity, KeyListEntityResponse} from "./KeyListEntity";

export declare class SenerTecDachsClientMSR2 {
    public readonly ReadKeyList: IReadKeyList<KeyListEntity>;
    private readonly options;
    private client;

    constructor(options: ClientOptions);

    fetchAll(): Promise<Partial<IReadKeyList<KeyListEntityResponse<string | number | boolean>>>>;

    fetchUsefulData(): Promise<Partial<IReadKeyList<KeyListEntityResponse<string | number | boolean>>>>;

    fetchKeys(...keys: string[]): Promise<Partial<IReadKeyList<KeyListEntityResponse<string | number | boolean>>>>;
}


export {
    ClientOptions,
    IReadKeyList,
    IWriteKeyList,
    KeyListEntity,
    KeyListEntityResponse
};
