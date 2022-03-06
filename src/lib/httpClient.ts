import axios, {AxiosResponse} from "axios";
import ReadKeyList from "./ReadKeyList";
import * as _ from "lodash";
import {ClientOptions} from "../interfaces/ClientOptions";
import {IReadKeyList} from "../interfaces/IReadKeyList";
import {KeyListEntityResponse} from "../interfaces/KeyListEntity";

/**
 * axios HTTP Client Class
 * - with some prepared fetch functions for data
 * @author Trickfilm400
 * @version 1
 * @class
 */
export class HttpClient {
    private options: ClientOptions;
    //baseURL
    private url: string;

    constructor(options: ClientOptions) {
        this.options = options;
        //combine parameter to baseUrl
        this.url = `${this.options.host}:${this.options.port ?? 8080}`;
    }

    /**
     * Takes every key and add the key to the get parameter list
     * @param {string[]} keys - Array of request keys
     * @private
     * @author Trickfilm400
     * @version 1
     * @return {string} The final and complete get parameter string
     */
    private urlBuilder(keys: string[]) {
        let url = "?";
        keys.forEach(key => {
            url += `k=${key}&`;
        });
        return url;
    }

    /**
     * main request function
     * @author Trickfilm400
     * @version 1
     * @param {string[]} keys - Array of request keys
     * @return Promise
     */
    fetchByKeys(...keys: string[]): Promise<Partial<IReadKeyList<KeyListEntityResponse>>> {
        return new Promise((resolve, reject) => {
            axios({
                auth: {
                    username: this.options.username || "glt",
                    password: this.options.password || undefined
                },
                baseURL: this.url,
                url: `/getKey` + this.urlBuilder(keys)
            }).then((res: AxiosResponse<string>) => {
                return this.parser(res.data);
            }).then(resolve, reject);
        });
    }

    /**
     * Parses the RAW HTTP Response from the request into key-value paris
     * @author Trickfilm400
     * @version 1
     * @param {string} res - The raw Result from the HTTP Request
     * @return Partial<IReadKeyList> The parsed key value pairs from the result in a JSON
     * @private
     */
    private parser(res: string) {
        //console.log(res);
        //remove "\n\n" from the end
        res = res.trim();
        //split to line by line
        const array = res.split("\n");
        const result: Partial<IReadKeyList<KeyListEntityResponse>> = {};
        //loop through every result line
        array.forEach(line => {
            //split key and value
            const [key, value] = line.split("=");
            //fetch key data, mostly for unit conversion
            let keyData = _.get(ReadKeyList, key);
            result[key] = {
                value,
                //key: keyData,
                parsedValue: keyData?.unit(value)
            };
        });
        //console.log(result);
        return result;
    }
}
