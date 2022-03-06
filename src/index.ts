import {ClientOptions} from "./interfaces/ClientOptions";
import {HttpClient} from "./lib/httpClient";
import ReadKeyList from "./lib/ReadKeyList";
import keyTemplates from "./lib/keyTemplates";


export class SenerTecDachsClientMSR2 {
    public readonly ReadKeyList = ReadKeyList;
    private readonly options: ClientOptions;
    private client: HttpClient;

    constructor(options: ClientOptions) {
        //double check if host is given
        if (!options?.host) throw new Error("No Host given for SenerTec Dachs!");
        //create http client
        this.options = options;
        this.client = new HttpClient(this.options);
    }

    fetchAll() {
        let all = [
            ...keyTemplates.BetriebsDatenDachs,
            ...keyTemplates.Aktoren,
            ...keyTemplates.BetriebsDaten3112,
            ...keyTemplates.Temperatures,
            ...keyTemplates.Daten2Waermeerzeuger,
            ...keyTemplates.HydraulikSchema,
            ...keyTemplates.MehrmodulTechnik,
            ...keyTemplates.Tageslauf,
            ...keyTemplates.Wartung
        ];
        return this.client.fetchByKeys(...all);
    }

    fetchUsefulData() {
        let keys = [
            ReadKeyList.Hka_Bd.ulArbeitElektr.key,
            ReadKeyList.BD3112.Hka_Bd.ulArbeitElektr.key,
            ReadKeyList.Hka_Bd.ulAnzahlStarts.key,
            ReadKeyList.Hka_Mw1.usDrehzahl.key
        ];
        return this.client.fetchByKeys(...keys);
    }

    fetchKeys(...keys: string[]) {
        return this.client.fetchByKeys(...keys);
    }
}
