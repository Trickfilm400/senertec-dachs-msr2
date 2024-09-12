# senertec-dachs-msr2

This NPM package provides a full nodejs-api for the Dachs-Ethernet-Card-HTTP-Api.

# Usage

- Install npm package with 
```shell
npm i @trickfilm400/senertec-dachs-msr2
```
- To see the complete list of all keys to fetch, visit the `lib/ReadKeyList.ts` file in the source code.
  There is a short description and the unit given. 
  Use the JSON path as in the example below and select the keys you need to fetch manually.

## Typescript Example

```typescript
import {IReadKeyList, KeyListEntityResponse, SenerTecDachsClientMSR2} from "@trickfilm400/senertec-dachs-msr2";

const client = new SenerTecDachsClientMSR2({
    host: "http://192.168.178.225",
    //protocol: "http",
    //port: 80,
    username: "glt",
    password: "",
    resultConfig: {
        //addRawValue: false,
        addKeyObject: false
    }
});

//fetch 4 predefined keys as written in the 'lib/index.ts' file.
//You probably don't need this if you want to fetch specific data
client.fetchUsefulData().then(result => {
    console.log(result)
});

// OR

//fetch specified keys manually
client.fetchKeys(
    //betriebsdaten
    client.ReadKeyList.Hka_Bd.ulAnzahlStarts.key,
    client.ReadKeyList.Hka_Bd.ulBetriebssekunden.key,
    client.ReadKeyList.Hka_Bd.ulArbeitElektr.key,
    client.ReadKeyList.Hka_Bd.UHka_Anf.usAnforderung.key,
    client.ReadKeyList.Hka_Bd.bStoerung.key,
    client.ReadKeyList.Hka_Bd.bWarnung.key
).then(result => {
    //...
});

// OR

//fetchAll fetches all readable keys at once
client.fetchAll().then(console.log);
```

## References and useful links

#### API Documentation (in German)

- https://community.symcon.de/t/senertec-bhkw-glt-einbindung-ueber-lan-ethernet/26658
    - **Official User Manual** (`.rar` Archive with a PDF): https://community.symcon.de/uploads/short-url/6LOE4M5F4zx6XNMeQGgZEAs7AiC.rar 
- https://www.bhkw-forum.de/diskussion/thread/5923-dachs-ethernet-informationssammlung/
- https://wiki.my-gekko.com/de/media/einbindungsenertecdachsbhkwv4795pdf_original.pdf
- https://forum.iobroker.net/topic/33944/senertec-dachs-bhkw

#### Similar Projects

- Python Cloud API: https://github.com/Kleinrotti/py-senertec

&copy; 2022-2024 Trickfilm400
