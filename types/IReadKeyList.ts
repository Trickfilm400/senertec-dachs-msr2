export interface IReadKeyList<T> {
    Hka_Bd: {
        Anforderung: {
            ModulAnzahl: T
            UStromF_Anf: {
                bFlagSF: T
            }
        },
        UStromF_Frei: {
            bFreigabe: T
        },
        bStoerung: T,
        bWarnung: T,
        UHka_Anf: {
            Anforderung: {
                fStrom: T
            },
            usAnforderung: T
        },
        UHka_Frei: {
            usFreigabe: T
        },
        ulArbeitElektr: T,
        ulArbeitThermHka: T,
        ulArbeitThermKon: T,
        ulBetriebssekunden: T,
        ulAnzahlStarts: T,
    };
    Hka_Bd_Stat: {
        uchSeriennummer: T,
        uchTeilenummer: T,
        ulInbetriebnahmedatum: T,
    }
    BD3112: {
        Hka_Bd: {
            ulBetriebssekunden: T,
            ulAnzahlStarts: T,
            ulArbeitElektr: T,
            ulArbeitThermHka: T,
            ulArbeitThermKon: T,
        },
        Ww_Bd: {
            ulWwMengepA: T
        }
    }
    Brenner_Bd: {
        bIstStatus: T,
        bWarnung: T,
        UBrenner_Anf: {
            usAnforderung: T
        },
        UBrenner_Frei: {
            bFreigabe: T
        }
        ulAnzahlStarts: T
        ulBetriebssekunden: T
    },
    Hka_Ew: {
        HydraulikNr: {
            bSpeicherArt: T,
            bWW_Art: T,
            b2_Waermeerzeuger: T,
            bMehrmodul: T,

        }
    },
    Hka_Mw1: {
        Temp: {
            sAbgasHKA: T
            sAbgasMotor: T
            sKapsel: T
            sbAussen: T
            sbFreigabeModul: T
            sbFuehler1: T
            sbFuehler2: T
            sbGen: T
            sbMotor: T
            sbRegler: T
            sbRuecklauf: T
            sbVorlauf: T
            sbZS_Fuehler3: T
            sbZS_Fuehler4: T
            sbZS_Vorlauf1: T
            sbZS_Vorlauf2: T
            sbZS_Warmwasser: T
        }
        Solltemp: {
            sbRuecklauf: T
            sbVorlauf: T
        }
        Aktor: {
            bWwPumpe: T
            fFreiAltWaerm: T
            fMischer1Auf: T
            fMischer1Zu: T
            fMischer2Auf: T
            fMischer2Zu: T
            fProgAus1: T
            fProgAus2: T
            fProgAus3: T
            fStoerung: T
            fUPHeizkreis1: T
            fUPHeizkreis2: T
            fUPKuehlung: T
            fUPVordruck: T
            fUPZirkulation: T
            fWartung: T
        }
        sWirkleistung: T
        ulMotorlaufsekunden: T
        usDrehzahl: T
    },
    Laufraster15Min_aktTag: {
        bDoppelstunde: [
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
        ]
    },
    Mm: [
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
        {
            ModulSteuerung: {
                fModulLaeuft: T
                fModulVerfuegbar: T
            }
        },
    ]
    Mm_MinMax: {
        bModulBhMaxWart: T
        bModulBhMinWart: T
        sBhMaxWart: T
        sBhMinWart: T
        ModulBhMax: {
            bModulNr: T
            ulWert: T
        }
        ModulBhMin: {
            bModulNr: T
            ulWert: T
        }
        ModulStartMax: {
            bModulNr: T
            ulWert: T
        }
        ModulStartMin: {
            bModulNr: T
            ulWert: T
        }
    }
    Wartung_Cache: {
        fStehtAn: T
        ulBetriebssekundenBei: T
        ulZeitstempel: T
        usIntervall: T
    }
}
