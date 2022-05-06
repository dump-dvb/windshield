const stops = {
    "102": {
        "name": "LSA Anton-/Leipziger Straße",
        "lat": 51.063033,
        "lon": 13.736958
    },
    "103": {
        "name": "Anton-/Zur Eisenbahnstraße",
        "lat": 51.064067,
        "lon": 13.736935
    },
    "104": {
        "name": "Schlesischer Platz",
        "lat": 51.064783,
        "lon": 13.740362
    },
    "107": {
        "name": "Albertplatz",
        "lat": 51.063252,
        "lon": 13.746367
    },
    "108": {
        "name": "Albertplatz West",
        "lat": 51.064241,
        "lon": 13.744951
    },
    "109": {
        "name": "Bautzner/Rothenburger",
        "lat": 51.062925,
        "lon": 13.751871
    },
    "119": {
        "name": "Straßburger Platz",
        "lat": 51.046078,
        "lon": 13.754815
    },
    "120": {
        "name": "Lennéstraße/Hauptallee",
        "lat": 51.042455,
        "lon": 13.751296
    },
    "121": {
        "name": "Lennéplatz",
        "lat": 51.038294,
        "lon": 13.746646
    },
    "136": {
        "name": "Könneritzstraße/Jahnstraße",
        "lat": 51.055101,
        "lon": 13.723554
    },
    "200": {
        "name": "Synagoge",
        "lat": 51.052611,
        "lon": 13.747128
    },
    "201": {
        "name": "St. Petersburger Straße/Pulmann-Newa",
        "lat": 51.042306,
        "lon": 13.736348
    },
    "203": {
        "name": "Pirnaischer Platz",
        "lat": 51.049434,
        "lon": 13.744379
    },
    "204": {
        "name": "Rathenauplatz",
        "lat": 51.051463,
        "lon": 13.747008
    },
    "205": {
        "name": "Carolaplatz",
        "lat": 51.057410,
        "lon": 13.745794
    },
    "206": {
        "name": "Neustädter Markt",
        "lat": 51.057757,
        "lon": 13.741322
    },
    "207": {
        "name": "Robert-Blum-Straße / Große Meißner Str.",
        "lat": 51.061568,
        "lon": 13.737761
    },
    "208": {
        "name": "Bodenbacher / Zwinglistraße",
        "lat": 51.033500,
        "lon": 13.782810
    },
    "268": {
        "name": "Albertplatz Süd",
        "lat": 51.061454,
        "lon": 13.746032
    },
    "305": {
        "name": "Karcherallee",
        "lat": 51.0370345,
        "lon": 13.7781818
    },
    "307": {
        "name": "Stübelallee/Zwinglistraße",
        "lat": 51.0346967,
        "lon": 13.7840746
    },
    "308": {
        "name": "Zwinglistraße",
        "lat": 51.0340625,
        "lon": 13.7833343
    },
    "310": {
        "name": "Rennplatzstraße",
        "lat": 51.0272979,
        "lon": 13.8004320
    },
    "311": {
        "name": "Marienberger Straße",
        "lat": 51.0256244,
        "lon": 13.8052278
    },
    "324": {
        "name": "Fetscherplatz",
        "lat": 51.046367,
        "lon": 13.770653
    },
    "330": {
        "name": "Schandauer Straße/Alternberger Straße",
        "lat": 51.0394224,
        "lon": 13.8059762
    },
    "346": {
        "name": "Schillerplatz",
        "lat": 51.052175,
        "lon": 13.805205
    },
    "357": {
        "name": "Hepkestraße",
        "lat": 51.0327378,
        "lon": 13.8052781
    },
    "363": {
        "name": "Blasewitzer/Fetscherstraße",
        "lat": 51.052881,
        "lon": 13.777738
    },
    "387": {
        "name": "Seidnitz Center",
        "lat": 51.0297010,
        "lon": 13.8024819
    },
    "405": {
        "name": "Caspar-David-Friedrich-Straße",
        "lat": 51.0264364,
        "lon": 13.7556769
    },
    "406": {
        "name": "Heinrich-Zille-Straße",
        "lat": 51.0255861,
        "lon": 13.7572326
    },
    "421": {
        "name": "Wasaplatz",
        "lat": 51.027979,
        "lon": 13.759444
    },
    "429": {
        "name": "Moränenende/Breitscheidstraße",
        "lat": 51.0135254,
        "lon": 13.8110393
    },
    "435": {
        "name": "Moränenende/Wilhelm-Liebknecht-Straße",
        "lat": 51.0125937,
        "lon": 13.8100717
    },
    "452": {
        "name": "Tiergartenstraße",
        "lat": 51.0298346,
        "lon": 13.7711960
    },
    "453": {
        "name": "Karchallee/Winterbergstraße",
        "lat": 51.0331947,
        "lon": 13.7745916
    },
    "454": {
        "name": "Dresden Grunaer Weg",
        "lat": 51.0309016,
        "lon": 13.7803976
    },
    "455": {
        "name": "Winderbergstraße",
        "lat": 51.0241871,
        "lon": 13.7973314
    },
    "459": {
        "name": "Mügelner Straße/Moränenende",
        "lat": 51.0112617,
        "lon": 13.8079246
    },
    "504": {
        "name": "Reichenbachstraße",
        "lat": 51.0348507,
        "lon": 13.7312898
    },
    "506": {
        "name": "Fritz-Foerster-Platz",
        "lat": 51.0301741,
        "lon": 13.7307460
    },
    "552": {
        "name": "Zellescher Weg",
        "lat": 51.0284316,
        "lon": 13.7459510
    },
    "604": {
        "name": "Nürnberger/Budapester Str.",
        "lat": 51.0369342,
        "lon": 13.7157618
    },
    "606": {
        "name": "Chemnitzer/Nöthritzer Str.",
        "lat": 51.0292989,
        "lon": 13.7071278
    },
    "651": {
        "name": "Nürnberger Platz",
        "lat": 51.0323243,
        "lon": 13.7261459
    },
    "804": {
        "name": "Tharandter/Kesselsdorfer Straße",
        "lat": 51.0436693,
        "lon": 13.7043013
    },
    "851": {
        "name": "Löbtauer Straße/Fröbelstraße",
        "lat": 51.0500279,
        "lon": 13.7126293
    },
    "1101": {
        "name": "Louisenstraße",
        "lat": 51.0680048,
        "lon": 13.7477077
    },
    "1102": {
        "name": "Bischofsweg",
        "lat": 51.0713760,
        "lon": 13.7506816
    },
    "1103": {
        "name": "Tannenstraße",
        "lat": 51.0737276,
        "lon": 13.7528442
    },
    "1151": {
        "name": "Bischofsplatz",
        "lat": 51.071993,
        "lon": 13.746973
    },
    "1104": {
        "name": "Staufenbergallee",
        "lat": 51.0766329,
        "lon": 13.7555318
    },
    "1202": {
        "name": "LSA Bautzner Straße/Pulsnitzer",
        "lat": 51.0633708,
        "lon": 13.7578833
    },
    "1203": {
        "name": "Pulsnitzer Straße",
        "lat": 51.063314,
        "lon": 13.757515
    },
    "1205": {
        "name": "Diakonissenkrankenhaus",
        "lat": 51.0641348,
        "lon": 13.7621847
    },
    "1220": {
        "name": "Nordstraße",
        "lat": 51.0661350,
        "lon": 13.7694067
    },
    "1301": {
        "name": "Körnerplatz/Grundstr.",
        "lat": 51.0539600,
        "lon": 13.8150960
    },
    "1501": {
        "name": "Hansastraße/Eisenbahnstraße",
        "lat": 51.0657888,
        "lon": 13.7381732
    },
    "3402": {
        "name": "Dresden Johannisfriedhof",
        "lat": 51.0368414,
        "lon": 13.8125265
    },
    "408": {
        "name": "Corinthstraße",
        "lat": 51.0213106,
        "lon": 13.7643742
    },
    "403": {
        "name": "Stehlener Platz",
        "lat": 51.0331333,
        "lon": 13.7488785
    },
    "402": {
        "name": "Gerhart-Hauptmann-Straße/Tiergartenstraße",
        "lat": 51.0374158,
        "lon": 13.7487953
    },
    "401": {
        "name": "Lenneplatz",
        "lat": 51.0380162,
        "lon": 13.7474113
    },
    "121": {
        "name": "Leneestraße/Gellerstraße",
        "lat": 51.0383636,
        "lon": 13.7466174
    },
    "123": {
        "name": "Gret-Palucca-Straße",
        "lat": 51.0389626,
        "lon": 13.7394281
    },
    "501": {
        "name": "Fritz-Löffler-Straße/Stehlener Straße",
        "lat": 51.0389726,
        "lon": 13.7332578
    },
    "192": {
        "name": "Hauptbahnhof",
        "lat": 51.0396540,
        "lon": 13.7337835
    },
    "302": {
        "name": "Comeniusplatz",
        "lat": 51.0416777,
        "lon": 13.7666030
    },
    "1504": {
        "name": "Dresden Grossenhainer Platz",
        "lat": 51.074117,
        "lon": 13.738611
    },
    "1404": {
        "name": "Dresden Grossenhainer Strasse / Frintz-Reuter-Strasse",
        "lat": 51.075230,
        "lon": 13.734514
    },
    "1270": {
        "name": "Stauffenbergalle / Hans-Oster-Strasse",
        "lat": 51.075896,
        "lon": 13.757962
    },
    "1293": {
        "name": "Hans-Oster-Strasse",
        "lat": 51.074884,
        "lon": 13.760771
    },
    "1257": {
        "name": "Marienallee",
        "lat": 51.073226,
        "lon": 13.765502
    },
    "1271": {
        "name": "Landesdirektion Sachsen",
        "lat": 51.071685,
        "lon": 13.770473
    },
    "1258": {
        "name": "Waldschloesschenstrasse",
        "lat": 51.069858,
        "lon": 13.775674
    },
    "1206": {
        "name": "Waldschloesschen",
        "lat": 51.067329,
        "lon": 13.776489
    },
    "1276": {
        "name": "Jaegerpark Heideblick",
        "lat": 51.070416,
        "lon": 13.788827
    },
    "1301": {
        "name": "Koernerplatz",
        "lat": 51.054347,
        "lon": 13.814161
    },
    "112": {
        "name": "Rosa-Luxemburg-Platz",
        "lat": 51.059115,
        "lon": 13.752996
    },
    "9107": {
        "name": "Zur Messe / Messering",
        "lat": 51.068695,
        "lon": 13.714456
    },
    "903": {
        "name": "Dresden Alberthafen",
        "lat": 51.062922,
        "lon": 13.715810
    },
    "900": {
        "name": "Madeburger Str. (crossing to EnergieVerbund Arena)",
        "lat": 51.061761,
        "lon": 13.720792
    },
    "902": {
        "name": "Magdeburger Str. / Weisseritzstr.",
        "lat": 51.058725,
        "lon": 13.726060
    },
    "901": {
        "name": "Weisseritzstr. / Pieschener Alle",
        "lat": 51.060234,
        "lon": 13.727899
    },
    "951": {
        "name": "Weisseritzstr. / Friedrichstr.",
        "lat": 51.057656,
        "lon": 13.724963
    },
    "999": {
        "name": "Friedrichstr. / Braeuergasse",
        "lat": 51.058993,
        "lon": 13.720930
    },
    "904": {
        "name": "Waltherstr. / Bremer Str.",
        "lat": 51.061586,
        "lon": 13.712814
    },
    "953": {
        "name": "Dresden Walterstrasse",
        "lat": 51.058158,
        "lon": 13.710172
    },
    "956": {
        "name": "Schaeferstr. / Behringstr.",
        "lat": 51.055846,
        "lon": 13.717046
    },
    "952": {
        "name": "Dresden Koreanischer Platz",
        "lat": 51.054744,
        "lon": 13.720228
    },
    "959": {
        "name": "Bahnhof Mitte / Weisseritzstr.",
        "lat": 51.055803,
        "lon": 13.722244
    },
    "960": {
        "name": "Bahnhof Mitte / Koenneritzstr.",
        "lat": 51.055086,
        "lon": 13.723567
    },
    "957": {
        "name": "Berliner str. / Loebtauer str.",
        "lat": 51.054055,
        "lon": 13.719069
    },
    "995": {
        "name": "Dresden Hamburger Str.",
        "lat": 51.059006,
        "lon": 13.703476
    },
    "905": {
        "name": "Dresden Bremer Str.",
        "lat": 51.060840,
        "lon": 13.694162
    },
    "90": {
        "name": "CarGoTram WV Logistikzentrum",
        "lat": 51.053790,
        "lon": 13.698442
    },
    "859": {
        "name": "Waltherstr. / Froebelstr.",
        "lat": 51.051679,
        "lon": 13.707432
    },
    "852": {
        "name": "Dresden Cottaer Str.",
        "lat": 51.050072,
        "lon": 13.712673
    },
    "860": {
        "name": "Froebelstr. / Emerich-Ambros-Ufer",
        "lat": 51.050829,
        "lon": 13.704106
    },
    "861": {
        "name": "Dresden Burgkstrasse",
        "lat": 51.049170,
        "lon": 13.696968
    },
    "862": {
        "name": "Dresden Pennricher Strasse",
        "lat": 51.049138,
        "lon": 13.692045
    },
    "139": {
        "name": "Dresden Kongresszentrum",
        "lat": 51.057972,
        "lon": 13.727255
    },
    "138": {
        "name": "Maxstrasse / Koenneritzstr.",
        "lat": 51.057033,
        "lon": 13.726101
    },
    "135": {
        "name": "Koenneritzstr. / Schweriner Str.",
        "lat": 51.054075,
        "lon": 13.722238
    },
    "133": {
        "name": "Ammonstrasse / Freiberger Str.",
        "lat": 51.049358,
        "lon": 13.720690
    },
    "134": {
        "name": "Koenneritzstr. / Ammonstrasse",
        "lat": 51.051675,
        "lon": 13.720342
    },
    "280": {
        "name": "Freiberger Str. / Tiefgarage WTC",
        "lat": 51.049675,
        "lon": 13.722087
    },
    "234": {
        "name": "Freiberger Str. / Freiberger Platz",
        "lat": 51.050296,
        "lon": 13.725170
    },
    "220": {
        "name": "Freiberger Str. / Hertha-Lindner-Strasse",
        "lat": 51.050873,
        "lon": 13.729145
    },
    "222": {
        "name": "Postplatz",
        "lat": 51.050872,
        "lon": 13.733433
    },
    "219": {
        "name": "Schweriner Str. / Hertha-Lindner-Strasse",
        "lat": 51.052070,
        "lon": 13.728905
    },
    "233": {
        "name": "Wettiner Platz",
        "lat": 51.053502,
        "lon": 13.724363
    },
    "223": {
        "name": "Wilsdruffer Str. / Schlossstr.",
        "lat": 51.050486,
        "lon": 13.737083
    },
    "299": {
        "name": "Wilsdruffer Str. / Galeriestr.",
        "lat": 51.050153,
        "lon": 13.739090
    },
    "1253": {
        "name": "Rothenburger Str. / Louisenstr.",
        "lat": 51.066338,
        "lon": 13.753906
    },
    "1254": {
        "name": "Goerlitzer Str. / Bischofsweg",
        "lat": 51.069746,
        "lon": 13.756130
    },
    "1501": {
        "name": "Eisenbahnstr. / Hansastraße",
        "lat": 51.065861,
        "lon": 13.739137
    },
    "1502": {
        "name": "Hansastraße / Loessnitzstr.",
        "lat": 51.068352,
        "lon": 13.739317
    },
    "1401": {
        "name": "Grossenhainer Str. / Hansastraße",
        "lat": 51.069169,
        "lon": 13.738403
    },
    "1003": {
        "name": "Leipziger Str. 29",
        "lat": 51.068620,
        "lon": 13.730891
    },
    "1274": {
        "name": "Bautzner Str. / Jaegerstr.",
        "lat": 51.066702,
        "lon": 13.772301
    },
    "1208": {
        "name": "Bautzner Str. / Fischhausstr.",
        "lat": 51.066964,
        "lon": 13.785562
    },
    "1209": {
        "name": "Dresden Wilhelminenstrasse",
        "lat": 51.067198,
        "lon": 13.789555
    },
    "1225": {
        "name": "Elbschloesser",
        "lat": 51.065970,
        "lon": 13.797705
    },
    "1259": {
        "name": "Fischhausstr / Heideparkstr.",
        "lat": 51.069317,
        "lon": 13.787302
    },
    "113": {
        "name": "Albertbrueke / Sachsenplatz",
        "lat": 51.055897,
        "lon": 13.755917
    },
    "111": {
        "name": "Melanchthonstr. / Hoyerswerdaer Str.",
        "lat": 51.060455,
        "lon": 13.752620
    },
    "1205": {
        "name": "Weintraubenstr. / Melanchthonstr.",
        "lat": 51.061179,
        "lon": 13.754711
    },
    "115": {
        "name": "Sachsenallee / Gerokstr.",
        "lat": 51.053918,
        "lon": 13.758129
    },
    "360": {
        "name": "Gerokstr. / Elisenstr.",
        "lat": 51.053229,
        "lon": 13.761923
    },
    "395": {
        "name": "Gerokstr. 16",
        "lat": 51.053111,
        "lon": 13.763297
    },
    "118": {
        "name": "Striesener Str. / Pillnitzer Str.",
        "lat": 51.049758,
        "lon": 13.757163
    },
    "236": {
        "name": "Pillnitzer Str. / Mathildenstr.",
        "lat": 51.050354,
        "lon": 13.753300
    },
    "322": {
        "name": "Striesener Str. / Hans-Grundig-Str.",
        "lat": 51.049177,
        "lon": 13.760643
    },
    "228": {
        "name": "Dippoldiswalder Platz",
        "lat": 51.046909,
        "lon": 13.734702
    },
    "202": {
        "name": "Georgplatz",
        "lat": 51.046395,
        "lon": 13.741428
    },
    "292": {
        "name": "St. Petersburger Str. 21",
        "lat": 51.045149,
        "lon": 13.739975
    },
    "122": {
        "name": "Wiener Str. / Franklinstr.",
        "lat": 51.037239,
        "lon": 13.744522
    },
    "362": {
        "name": "Fetscherstraße / Pfotenhauerstr.",
        "lat": 51.058734,
        "lon": 13.777413
    },
    "363": {
        "name": "Duererstr. / Fetscherstraße",
        "lat": 51.050828,
        "lon": 13.775656
    },
    "3176": {
        "name": "Fetscherstraße / Gabelsbergerstr.",
        "lat": 51.049781,
        "lon": 13.774610
    },
    "393": {
        "name": "Borsbergstr. / Mosenstr.",
        "lat": 51.044786,
        "lon": 13.777631
    },
    "381": {
        "name": "Borsbergstr. / Spenerstr.",
        "lat": 51.043940,
        "lon": 13.781547
    },
    "327": {
        "name": "Schandauer Str. / Bergmannstr.",
        "lat": 51.043311,
        "lon": 13.788805
    },
    "328": {
        "name": "Pohlandplatz",
        "lat": 51.042901,
        "lon": 13.795439
    },
    "3101": {
        "name": "Niederwaldpl. / Scariastr.",
        "lat": 51.044470,
        "lon": 13.807889
    },
    "347": {
        "name": "Am Schillergarten / Tolkewitzer Str.",
        "lat": 51.050877,
        "lon": 13.808274
    },
    "361": {
        "name": "Hueblerstr. / Berggartenstr.",
        "lat": 51.051124,
        "lon": 13.803719
    },
    "503": {
        "name": "Fritz-Löffler-Str. 16",
        "lat": 51.035964,
        "lon": 13.731757
    },
    "3107": {
        "name": "Fetscherstraße / Tatzberg",
        "lat": 51.056047,
        "lon": 13.777544
    },
    "3150": {
        "name": "Fetscherstraße / Fiedlerstr.",
        "lat": 51.053950,
        "lon": 13.777849
    },
    "378": {
        "name": "Königsheimplatz",
        "lat": 51.053808,
        "lon": 13.786601
    },
    "376": {
        "name": "Blasewitzer Str. / Augsburger Str.",
        "lat": 51.053259,
        "lon": 13.781579
    },
    "3106": {
        "name": "Loschwitzer Str. / Lene-Glatzer-Str.",
        "lat": 51.053834,
        "lon": 13.792404
    }
}