import {IReadKeyList} from "../interfaces/IReadKeyList";

const ReadKeyList: IReadKeyList = {
    Hka_Bd: {
        Anforderung: {
            ModulAnzahl: {
                "key": "Hka_Bd.Anforderung.ModulAnzahl",
                "doc": "Anzahl der angeforderten Module",
                "unit": Number
            },
            UStromF_Anf: {
                bFlagSF: {
                    "key": "Hka_Bd.Anforderung.UStromF_Anf.bFlagSF",
                    "doc": "Anforderungen Stromführung",
                    "unit": Number
                }
            }
        },
        UStromF_Frei: {
            bFreigabe: {
                "key": "Hka_Bd.UStromF_Frei.bFreigabe",
                "doc": "Freigabe Stromführung",
                "unit": Number
            }
        },
        bStoerung: {
            "key": "Hka_Bd.bStoerung",
            "doc": "Aktuelle Störung Dachs",
            "unit": Number
        },
        bWarnung: {
            "key": "Hka_Bd.bWarnung",
            "doc": "Aktueller Warncode Dachs",
            "unit": Number
        },
        UHka_Anf: {
            Anforderung: {
                fStrom: {
                    "key": "Hka_Bd.UHka_Anf.Anforderung.fStrom",
                    "doc": "Anforderung Strom",
                    "unit": (x) => x === "true"
                }
            },
            usAnforderung: {
                "key": "Hka_Bd.UHka_Anf.usAnforderung",
                "doc": "Anforderung Dachs",
                "unit": Number
            }
        },
        UHka_Frei: {
            usFreigabe: {
                "key": "Hka_Bd.UHka_Frei.usFreigabe",
                "doc": "Freigabe Dachs",
                "unit": Number
            }
        },
        ulArbeitElektr: {
            "key": "Hka_Bd.ulArbeitElektr",
            "doc": "Erzeugte elektrische Arbeit",
            "unit": Number
        },
        ulArbeitThermHka: {
            "key": "Hka_Bd.ulArbeitThermHka",
            "doc": "Erzeugte thermische Arbeit",
            "unit": Number
        },
        ulArbeitThermKon: {
            "key": "Hka_Bd.ulArbeitThermKon",
            "doc": "Erzeugte thermische Arbeit Kondenser",
            "unit": Number
        },
        ulBetriebssekunden: {
            "key": "Hka_Bd.ulBetriebssekunden",
            "doc": "Betriebsstunden Dachs",
            "unit": Number
        },
        ulAnzahlStarts: {
            "key": "Hka_Bd.ulAnzahlStarts",
            "doc": "Anzahl Starts Dachs",
            "unit": Number
        }
    },
    Hka_Bd_Stat: {
        uchSeriennummer: {
            "key": "Hka_Bd_Stat.uchSeriennummer",
            "doc": "Seriennummer",
            "unit": Number
        },
        uchTeilenummer: {
            "key": "Hka_Bd_Stat.uchTeilenummer",
            "doc": "Teilenummer",
            "unit": Number
        },
        ulInbetriebnahmedatum: {
            "key": "Hka_Bd_Stat.ulInbetriebnahmedatum",
            "doc": "Inbetriebnahmedatum",
            "unit": Number
        }
    },
    BD3112: {
        Hka_Bd: {
            ulBetriebssekunden: {
                "key": "BD3112.Hka_Bd.ulBetriebssekunden",
                "doc": "Betriebsstunden Dachs",
                "unit": Number
            },
            ulAnzahlStarts: {
                "key": "BD3112.Hka_Bd.ulAnzahlStarts",
                "doc": "Anzahl Starts Dachs",
                "unit": Number
            },
            ulArbeitElektr: {
                "key": "BD3112.Hka_Bd.ulArbeitElektr",
                "doc": "Erzeugte elektrische Arbeit",
                "unit": Number
            },
            ulArbeitThermHka: {
                "key": "BD3112.Hka_Bd.ulArbeitThermHka",
                "doc": "Erzeugte thermische Arbeit",
                "unit": Number
            },
            ulArbeitThermKon: {
                "key": "BD3112.Hka_Bd.ulArbeitThermKon",
                "doc": "Erzeugte thermische Arbeit Kondenser",
                "unit": Number
            }
        },
        Ww_Bd: {
            ulWwMengepA: {
                "key": "BD3112.Ww_Bd.ulWwMengepA",
                "doc": "Warmwassermenge pro Jahr",
                "unit": Number
            }
        }
    },
    Brenner_Bd: {
        bIstStatus: {
            "key": "Brenner_Bd.bIstStatus",
            "doc": "Status des SEplus",
            "unit": Number
        },
        bWarnung: {
            "key": "Brenner_Bd.bWarnung",
            "doc": "Warncode SEplus",
            "unit": Number
        },
        UBrenner_Anf: {
            usAnforderung: {
                "key": "Brenner_Bd.UBrenner_Anf.usAnforderung",
                "doc": "Anforderung",
                "unit": Number
            }
        },
        UBrenner_Frei: {
            bFreigabe: {
                "key": "Brenner_Bd.UBrenner_Frei.bFreigabe",
                "doc": "Freigabe",
                "unit": Number
            }
        },
        ulAnzahlStarts: {
            "key": "Brenner_Bd.ulAnzahlStarts",
            "doc": "Erzeugte thermische Arbeit",
            "unit": Number
        },
        ulBetriebssekunden: {
            "key": "Brenner_Bd.ulBetriebssekunden",
            "doc": "Erzeugte thermische Arbeit Kondenser",
            "unit": Number
        }
    },
    Hka_Ew: {
        HydraulikNr: {
            bSpeicherArt: {
                key: "Hka_Ew.HydraulikNr.bSpeicherArt",
                doc: "Speicherart",
                unit: Number
            },
            bWW_Art: {
                "key": "Hka_Ew.HydraulikNr.bWW_Art",
                "doc": "Brauchwasserbereitung",
                "unit": Number
            },
            b2_Waermeerzeuger: {
                "key": "Hka_Ew.HydraulikNr.b2_Waermeerzeuger",
                "doc": "2. Wärmeerzeuger",
                "unit": Number
            },
            bMehrmodul: {
                "key": "Hka_Ew.HydraulikNr.bMehrmodul",
                "doc": "Mehrmodultechnik",
                "unit": Number
            }
        }
    },
    Hka_Mw1: {
        Temp: {
            sAbgasHKA: {
                "key": "Hka_Mw1.Temp.sAbgasHKA",
                "doc": "Abgastemperatur Dachs",
                "unit": Number
            },
            sAbgasMotor: {
                "key": "Hka_Mw1.Temp.sAbgasMotor",
                "doc": "Abgastemperatur Motor",
                "unit": Number
            },
            sKapsel: {
                "key": "Hka_Mw1.Temp.sKapsel",
                "doc": "Kapseltemperatur",
                "unit": Number
            },
            sbAussen: {
                "key": "Hka_Mw1.Temp.sbAussen",
                "doc": "Außentemperatur",
                "unit": Number
            },
            sbFreigabeModul: {
                "key": "Hka_Mw1.Temp.sbFreigabeModul",
                "doc": "Freigabe Modul",
                "unit": Number
            },
            sbFuehler1: {
                "key": "Hka_Mw1.Temp.sbFuehler1",
                "doc": "Temperatur Fühler 1 (F1)",
                "unit": Number
            },
            sbFuehler2: {
                "key": "Hka_Mw1.Temp.sbFuehler2",
                "doc": "Temperatur Fühler 2 (F2)",
                "unit": Number
            },
            sbGen: {
                "key": "Hka_Mw1.Temp.sbGen",
                "doc": "Dachs Eintrittstemperatur",
                "unit": Number
            },
            sbMotor: {
                "key": "Hka_Mw1.Temp.sbMotor",
                "doc": "Kühlwassertemperatur Motor",
                "unit": Number
            },
            sbRegler: {
                "key": "Hka_Mw1.Temp.sbRegler",
                "doc": "Interne Reglertemperatur",
                "unit": Number
            },
            sbRuecklauf: {
                "key": "Hka_Mw1.Temp.sbRuecklauf",
                "doc": "Rücklauftemperatur",
                "unit": Number
            },
            sbVorlauf: {
                "key": "Hka_Mw1.Temp.sbVorlauf",
                "doc": "Vorlauftemperatur",
                "unit": Number
            },
            sbZS_Fuehler3: {
                "key": "Hka_Mw1.Temp.sbZS_Fuehler3",
                "doc": "Temperatur Fühler 3 (F3)",
                "unit": Number
            },
            sbZS_Fuehler4: {
                "key": "Hka_Mw1.Temp.sbZS_Fuehler4",
                "doc": "Temperatur Fühler 4 (F4)",
                "unit": Number
            },
            sbZS_Vorlauf1: {
                "key": "Hka_Mw1.Temp.sbZS_Vorlauf1",
                "doc": "Vorlauftemperatur Heizkreis 1",
                "unit": Number
            },
            sbZS_Vorlauf2: {
                "key": "Hka_Mw1.Temp.sbZS_Vorlauf2",
                "doc": "Vorlauftemperatur Heizkreis 2",
                "unit": Number
            },
            sbZS_Warmwasser: {
                "key": "Hka_Mw1.Temp.sbZS_Warmwasser",
                "doc": "Temperatur Warmwasser",
                "unit": Number
            }
        },
        Solltemp: {
            sbRuecklauf: {
                "key": "Hka_Mw1.Solltemp.sbRuecklauf",
                "doc": "Solltemperatur Rücklauf",
                "unit": Number
            },
            sbVorlauf: {
                "key": "Hka_Mw1.Solltemp.sbVorlauf",
                "doc": "Solltemperatur Vorlauf",
                "unit": Number
            }
        },
        Aktor: {
            bWwPumpe: {
                "key": "Hka_Mw1.Aktor.bWwPumpe",
                "doc": "Brauchwasserladepumpe",
                "unit": Number
            },
            fFreiAltWaerm: {
                "key": "Hka_Mw1.Aktor.fFreiAltWaerm",
                "doc": "Freigabe Wärmeerzeuger",
                "unit": (x => x === "true")
            },
            fMischer1Auf: {
                "key": "Hka_Mw1.Aktor.fMischer1Auf",
                "doc": "Mischer 1 Auf",
                "unit": (x => x === "true")
            },
            fMischer1Zu: {
                "key": "Hka_Mw1.Aktor.fMischer1Zu",
                "doc": "Mischer 1 Zu",
                "unit": (x => x === "true")
            },
            fMischer2Auf: {
                "key": "Hka_Mw1.Aktor.fMischer2Auf",
                "doc": "Mischer 2 Auf",
                "unit": (x => x === "true")
            },
            fMischer2Zu: {
                "key": "Hka_Mw1.Aktor.fMischer2Zu",
                "doc": "Mischer 2 Zu",
                "unit": (x => x === "true")
            },
            fProgAus1: {
                "key": "Hka_Mw1.Aktor.fProgAus1",
                "doc": "Programmierbarer Ausgang 1",
                "unit": (x => x === "true")
            },
            fProgAus2: {
                "key": "Hka_Mw1.Aktor.fProgAus2",
                "doc": "Programmierbarer Ausgang 2",
                "unit": (x => x === "true")
            },
            fProgAus3: {
                "key": "Hka_Mw1.Aktor.fProgAus3",
                "doc": "Programmierbarer Ausgang 2(?) 3?",
                "unit": (x => x === "true")
            },
            fStoerung: {
                "key": "Hka_Mw1.Aktor.fStoerung",
                "doc": "Relais Störung",
                "unit": (x => x === "true")
            },
            fUPHeizkreis1: {
                "key": "Hka_Mw1.Aktor.fUPHeizkreis1",
                "doc": "Pumpe Heizkreis 1",
                "unit": (x => x === "true")
            },
            fUPHeizkreis2: {
                "key": "Hka_Mw1.Aktor.fUPHeizkreis2",
                "doc": "Pumpe Heizkreis 2",
                "unit": (x => x === "true")
            },
            fUPKuehlung: {
                "key": "Hka_Mw1.Aktor.fUPKuehlung",
                "doc": "Interne Umwälzpumpe",
                "unit": (x => x === "true")
            },
            fUPVordruck: {
                "key": "Hka_Mw1.Aktor.fUPVordruck",
                "doc": "UP Vordruck",
                "unit": (x => x === "true")
            },
            fUPZirkulation: {
                "key": "Hka_Mw1.Aktor.fUPZirkulation",
                "doc": "Zirkulationspumpe",
                "unit": (x => x === "true")
            },
            fWartung: {
                "key": "Hka_Mw1.Aktor.fWartung",
                "doc": "Relais Wartung",
                "unit": (x => x === "true")
            }
        },
        sWirkleistung: {
            "key": "Hka_Mw1.sWirkleistung",
            "doc": "Aktuelle Wirkleistung",
            "unit": Number
        },
        ulMotorlaufsekunden: {
            "key": "Hka_Mw1.ulMotorlaufsekunden",
            "doc": "Motorlaufzeit seit Start",
            "unit": Number
        },
        usDrehzahl: {
            "key": "Hka_Mw1.usDrehzahl",
            "doc": "Motordrehzahl",
            "unit": Number
        }
    },
    Laufraster15Min_aktTag: {
        bDoppelstunde: [
            {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[0]",
                "doc": "15 Minuten Raster 2-4 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[1]",
                "doc": "15 Minuten Raster 4-6 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[2]",
                "doc": "15 Minuten Raster 6-8 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[3]",
                "doc": "15 Minuten Raster 8-10 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[4]",
                "doc": "15 Minuten Raster 10-12 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[5]",
                "doc": "15 Minuten Raster 12-14 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[6]",
                "doc": "15 Minuten Raster 14-16 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[7]",
                "doc": "15 Minuten Raster 16-18 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[8]",
                "doc": "15 Minuten Raster 18-20 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[9]",
                "doc": "15 Minuten Raster 20-22 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[10]",
                "doc": "15 Minuten Raster 22-0 Uhr",
                "unit": Number
            }, {
                "key": "Laufraster15Min_aktTag.bDoppelstunde[11]",
                "doc": "15 Minuten Raster 0-2 Uhr",
                "unit": Number
            }
        ]

    },
    Mm: [
        {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[0].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 1",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[0].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 1",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[1].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 2",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[1].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 2",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[2].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 3",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[2].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 3",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[3].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 4",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[3].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 4",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[4].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 5",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[4].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 5",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[5].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 6",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[5].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 6",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[6].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 7",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[6].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 7",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[7].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 8",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[7].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 8",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[8].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 9",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[8].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 9",
                    "unit": (x => x === "true")
                }
            }
        }, {
            ModulSteuerung: {
                fModulLaeuft: {
                    key: "Mm[9].ModulSteuerung.fModulLaeuft",
                    doc: "Status Modul 10",
                    unit: (x => x === "true")
                },
                fModulVerfuegbar: {
                    "key": "Mm[9].ModulSteuerung.fModulVerfuegbar",
                    "doc": "Verfügbarkeit Modul 10",
                    "unit": (x => x === "true")
                }
            }
        }
    ],
    Mm_MinMax: {
        bModulBhMaxWart: {
            "key": "Mm_MinMax.bModulBhMaxWart",
            "doc": "Modulnummer mit maximalen Betriebsstunden bis zur Wartung",
            "unit": Number
        },
        bModulBhMinWart: {
            "key": "Mm_MinMax.bModulBhMinWart",
            "doc": "Modulnummer mit minimalen Betriebsstunden bis zur Wartung",
            "unit": Number
        },
        sBhMaxWart: {
            "key": "Mm_MinMax.sBhMaxWart",
            "doc": "Maximale Betriebsstunden bis zur Wartung",
            "unit": Number
        },
        sBhMinWart: {
            "key": "Mm_MinMax.sBhMinWart",
            "doc": "Minimale Betriebsstunden bis zur Wartung",
            "unit": Number
        },
        ModulBhMax: {
            bModulNr: {
                "key": "Mm_MinMax.ModulBhMax.bModulNr",
                "doc": "Modulnummer mit maximalen Betriebsstunden",
                "unit": Number
            },
            ulWert: {
                "key": "Mm_MinMax.ModulBhMax.ulWert",
                "doc": "Maximale Betriebsstunden",
                "unit": Number
            }
        },
        ModulBhMin: {
            bModulNr: {
                "key": "Mm_MinMax.ModulBhMin.bModulNr",
                "doc": "Modulnummer mit minimalen Betriebstunden",
                "unit": Number
            },
            ulWert: {
                "key": "Mm_MinMax.ModulBhMin.ulWert",
                "doc": "Minimale Betriebsstunden",
                "unit": Number
            }
        },
        ModulStartMax: {
            bModulNr: {
                "key": "Mm_MinMax.ModulStartMax.bModulNr",
                "doc": "Modulnummer mit der maximalen Anzahl Starts",
                "unit": Number
            },
            ulWert: {
                "key": "Mm_MinMax.ModulStartMax.ulWert",
                "doc": "Maximale Anzahl Starts",
                "unit": Number
            }
        },
        ModulStartMin: {
            bModulNr: {
                "key": "Mm_MinMax.ModulStartMin.bModulNr",
                "doc": "Modulnummer mit der minimalen Anzahl Starts",
                "unit": Number
            },
            ulWert: {
                "key": "Mm_MinMax.ModulStartMin.ulWert",
                "doc": "Minimale Anzahl Starts",
                "unit": Number
            }
        }
    },
    Wartung_Cache: {
        fStehtAn: {
            "key": "Wartung_Cache.fStehtAn",
            "doc": "Status Wartung",
            "unit": (x => x === "true")
        },
        ulBetriebssekundenBei: {
            "key": "Wartung_Cache.ulBetriebssekundenBei",
            "doc": "Betriebssekunden der letzten Wartung",
            "unit": Number
        },
        ulZeitstempel: {
            "key": "Wartung_Cache.ulZeitstempel",
            "doc": "Zeitstempel der letzten Wartung",
            "unit": Number
        },
        usIntervall: {
            "key": "Wartung_Cache.usIntervall",
            "doc": "Eingestellter Wartungsintervall",
            "unit": Number
        }
    }
};

export default ReadKeyList;
