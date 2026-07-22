import {after, before, describe, it} from "node:test";
import assert from "node:assert";
import {SenerTecDachsClientMSR2} from "../dist/index.js"
import * as http from "node:http";

// function to get request body (IF NEEDED)
function getBody(request: http.IncomingMessage): any {
    return new Promise((resolve, reject) => {
        const bodyParts: any[] = [];

        request.on('data', (chunk) => {
            bodyParts.push(chunk);
        });

        request.on('end', () => {
            const body = Buffer.concat(bodyParts).toString();
            resolve(body);
        });

        request.on('error', (error) => {
            reject(error);
        })
    });
}

describe('test e2e', () => {
    let mockServer: http.Server;
    let client: SenerTecDachsClientMSR2;
    before(async () => {
        // Simple mock – just returns a JSON payload
        mockServer = http.createServer(async (req, res) => {
            console.log("::GOT MOCK SERVER REQUEST::")
            // console.log(req.headers);
            assert.strictEqual(req.headers.authorization, "Basic " + Buffer.from("abc:123456").toString("base64"));
            if (req.url?.startsWith('/getKey') && req.method === 'GET') {
                res.writeHead(200, {'Content-Type': 'text/plain'});

                const res2 = new URLSearchParams(req.url.substring(8));
                //console.log(res2);
                let responseString = "";
                for (const key of res2) {
                    if (key[1] === "Hka_Bd.ulAnzahlStarts") {
                        responseString += `Hka_Bd.ulAnzahlStarts=1\n`;
                    } else if (key[1] === "Hka_Bd.ulBetriebssekunden") {
                        responseString += `Hka_Bd.ulBetriebssekunden=1000\n`;
                    }
                }
                //console.log(responseString);
                res.end(responseString);
            } else {
                res.writeHead(404);
                res.end();
            }
        });
        await new Promise<void>((res) => {
            mockServer.listen(8098)
            res();
        });
    })
    it('should true eq true', () => {
        assert.strictEqual(true, true);
    })
    it('should mock request', () => {
        client = new SenerTecDachsClientMSR2({
            host: '127.0.0.1',
            port: 8098,
            password: '123456',
            username: "abc",
            protocol: "http",
            resultConfig: {
                addRawValue: true,
                addKeyObject: true,
            }
        });
        assert.strictEqual(typeof client, "object")
    })
    //it('test 2', () => {})
    it('test deep eq', async () => {
        const r = await client.fetchKeys(client.ReadKeyList.Hka_Bd.ulAnzahlStarts.key, client.ReadKeyList.Hka_Bd.ulBetriebssekunden.key)
        //console.log(r)
        assert.deepStrictEqual(r, {
            Hka_Bd: {
                ulAnzahlStarts: {
                    key: {
                        doc: "Anzahl Starts Dachs",
                        key: "Hka_Bd.ulAnzahlStarts",
                        unit: Number
                    },
                    rawValue: "1",
                    value: 1
                }, ulBetriebssekunden: {
                    key: {
                        doc: "Betriebsstunden Dachs",
                        key: "Hka_Bd.ulBetriebssekunden",
                        unit: Number
                    },
                    rawValue: "1000",
                    value: 1000
                }
            }
        });
    })
    it('test deep eq without rawValue and without KeyObject', async () => {
        let privClient = new SenerTecDachsClientMSR2({
            host: '127.0.0.1',
            port: 8098,
            password: '123456',
            username: "abc",
            protocol: "http",
            resultConfig: {
                addRawValue: false,
                addKeyObject: false,
            }
        });
        const r = await privClient.fetchKeys(client.ReadKeyList.Hka_Bd.ulAnzahlStarts.key, client.ReadKeyList.Hka_Bd.ulBetriebssekunden.key)
        //console.log(r)
        assert.deepStrictEqual(r, {
            Hka_Bd: {
                ulAnzahlStarts: {
                    value: 1
                }, ulBetriebssekunden: {
                    value: 1000
                }
            }
        });
    })
    it('keylist should exist', () => {
        assert.strictEqual(client.ReadKeyList.Hka_Bd.ulAnzahlStarts.key, "Hka_Bd.ulAnzahlStarts")
    })
    after(() => {
        mockServer.close();
    })
})