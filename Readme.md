# senertec-dachs-msr2

This NPM package provides a full nodejs-api for the Dachs-Ethernet-Card-HTTP-Api. Look [here](https://wiki.my-gekko.com/de/media/einbindungsenertecdachsbhkwv4795pdf_original.pdf) for the a rough german API documentation.

# Usage

- Install npm package

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


client.fetchUsefulData().then(result => {
    console.log(result)
});

// OR

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
```


&copy; 2022-2024 Trickfilm400
