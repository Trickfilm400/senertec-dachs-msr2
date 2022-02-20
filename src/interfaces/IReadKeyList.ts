import {KeyListEntity} from "./KeyListEntity";

export interface IReadKeyList {
    Hka_Bd: {
        Anforderung: {
            ModulAnzahl: KeyListEntity
            UStromF_Anf: {
                bFlagSF: KeyListEntity
            }
        },
        UStromF_Frei: {
            bFreigabe: KeyListEntity
        },
        bStoerung: KeyListEntity,
        bWarnung: KeyListEntity,
        UHka_Anf: {
            Anforderung: {
                fStrom: KeyListEntity
            },
            usAnforderung: KeyListEntity
        },
        UHka_Frei: {
            usFreigabe: KeyListEntity
        },
        ulArbeitElektr: KeyListEntity,
        ulArbeitThermHka: KeyListEntity,
        ulArbeitThermKon: KeyListEntity,
        ulBetriebssekunden: KeyListEntity,
        ulAnzahlStarts: KeyListEntity,
    };
    Hka_Bd_Stat: {
        uchSeriennummer: KeyListEntity,
        uchTeilenummer: KeyListEntity,
        ulInbetriebnahmedatum: KeyListEntity,
    }
    BD3112: {
        Hka_Bd: {
            ulBetriebssekunden: KeyListEntity,
            ulAnzahlStarts: KeyListEntity,
            ulArbeitElektr: KeyListEntity,
            ulArbeitThermHka: KeyListEntity,
            ulArbeitThermKon: KeyListEntity,
        },
        Ww_Bd: {
            ulWwMengepA: KeyListEntity
        }
    }
    Brenner_Bd: {
        bIstStatus: KeyListEntity,
        bWarnung: KeyListEntity,
        UBrenner_Anf: {
            usAnforderung: KeyListEntity
        },
        UBrenner_Frei: {
            bFreigabe: KeyListEntity
        }
        ulAnzahlStarts: KeyListEntity
        ulBetriebssekunden: KeyListEntity
    },
    Hka_Ew: {
        HydraulikNr: {
            bSpeicherArt: KeyListEntity,
            bWW_Art: KeyListEntity,
            b2_Waermeerzeuger: KeyListEntity,
            bMehrmodul: KeyListEntity,

        }
    },
    Hka_Mw1: {
        Temp: {
            sAbgasHKA: KeyListEntity
            sAbgasMotor: KeyListEntity
            sKapsel: KeyListEntity
            sbAussen: KeyListEntity
            sbFreigabeModul: KeyListEntity
            sbFuehler1: KeyListEntity
            sbFuehler2: KeyListEntity
            sbGen: KeyListEntity
            sbMotor: KeyListEntity
            sbRegler: KeyListEntity
            sbRuecklauf: KeyListEntity
            sbVorlauf: KeyListEntity
            sbZS_Fuehler3: KeyListEntity
            sbZS_Fuehler4: KeyListEntity
            sbZS_Vorlauf1: KeyListEntity
            sbZS_Vorlauf2: KeyListEntity
            sbZS_Warmwasser: KeyListEntity
        }
        Solltemp: {
            sbRuecklauf: KeyListEntity
            sbVorlauf: KeyListEntity
        }
        Aktor: {
            bWwPumpe: KeyListEntity
            fFreiAltWaerm: KeyListEntity
            fMischer1Auf: KeyListEntity
            fMischer1Zu: KeyListEntity
            fMischer2Auf: KeyListEntity
            fMischer2Zu: KeyListEntity
            fProgAus1: KeyListEntity
            fProgAus2: KeyListEntity
            fProgAus3: KeyListEntity
            fStoerung: KeyListEntity
            fUPHeizkreis1: KeyListEntity
            fUPHeizkreis2: KeyListEntity
            fUPKuehlung: KeyListEntity
            fUPVordruck: KeyListEntity
            fUPZirkulation: KeyListEntity
            fWartung: KeyListEntity
        }
        sWirkleistung: KeyListEntity
        ulMotorlaufsekunden: KeyListEntity
        usDrehzahl: KeyListEntity
    },
    Laufraster15Min_aktTag: {
        bDoppelstunde: [
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
            KeyListEntity,
        ]
    },
    Mm: [
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: KeyListEntity
                fModulVerfuegbar: KeyListEntity
            }
        },
    ]
    Mm_MinMax: {
        bModulBhMaxWart: KeyListEntity
        bModulBhMinWart: KeyListEntity
        sBhMaxWart: KeyListEntity
        sBhMinWart: KeyListEntity
        ModulBhMax: {
            bModulNr: KeyListEntity
            ulWert: KeyListEntity
        }
        ModulBhMin: {
            bModulNr: KeyListEntity
            ulWert: KeyListEntity
        }
        ModulStartMax: {
            bModulNr: KeyListEntity
            ulWert: KeyListEntity
        }
        ModulStartMin: {
            bModulNr: KeyListEntity
            ulWert: KeyListEntity
        }
    }
    Wartung_Cache: {
        fStehtAn: KeyListEntity
        ulBetriebssekundenBei: KeyListEntity
        ulZeitstempel: KeyListEntity
        usIntervall: KeyListEntity
    }
}
