/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

// Deterministic JSON.stringify()
const stringify  = require('json-stringify-deterministic');
const sortKeysRecursive  = require('sort-keys-recursive');
const { Contract } = require('fabric-contract-api');

// Déclaration des parcelles
const Parcel4   = {
    "type": "FeatureCollection",
    "name": "Parcelle-4pts",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 1
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [
                                -16.464753081385084,
                                12.944351858605895
                            ],
                            [
                                -16.293150598844402,
                                12.929429903602356
                            ],
                            [
                                -16.293150598844402,
                                12.772749376065212
                            ],
                            [
                                -16.464753081385084,
                                12.765288398563442
                            ],
                            [
                                -16.464753081385084,
                                12.944351858605895
                            ]
                        ]
                    ]
                ]
            }
        }
    ]
}
const Parcel5   = {
    "type": "FeatureCollection",
    "name": "Parcelle-5pts",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 3
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [
                                -15.487365028653368,
                                14.399242471450815
                            ],
                            [
                                -15.360528411123299,
                                14.324632696433127
                            ],
                            [
                                -15.382911343628605,
                                14.160491191394213
                            ],
                            [
                                -15.569435781172826,
                                14.160491191394213
                            ],
                            [
                                -15.569435781172826,
                                14.317171718931359
                            ],
                            [
                                -15.487365028653368,
                                14.399242471450815
                            ]
                        ]
                    ]
                ]
            }
        }
    ]
}
const Parcel7   = {
    "type": "FeatureCollection",
    "name": "Parcelle-7pts",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 3
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [
                                -16.837801956473527,
                                15.07073044661001
                            ],
                            [
                                -16.770653158957607,
                                14.966276761585245
                            ],
                            [
                                -16.837801956473527,
                                14.869284054062252
                            ],
                            [
                                -16.912411731491215,
                                14.839440144055176
                            ],
                            [
                                -16.964638574003597,
                                14.854362099058713
                            ],
                            [
                                -16.979560529007134,
                                14.928971874076401
                            ],
                            [
                                -16.949716619000057,
                                15.003581649094091
                            ],
                            [
                                -16.837801956473527,
                                15.07073044661001
                            ]
                        ]
                    ]
                ]
            }
        }
    ]
}
const Parcel135 = {
    "type": "FeatureCollection",
    "name": "Parcelle-135pts",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": null
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [
                                -14.724613701381223,
                                15.094968207470785
                            ],
                            [
                                -14.570057881270282,
                                15.109600711149929
                            ],
                            [
                                -14.564570692390603,
                                15.105942585230142
                            ],
                            [
                                -14.553596314631248,
                                15.105942585230142
                            ],
                            [
                                -14.545365531311729,
                                15.100455396350464
                            ],
                            [
                                -14.542621936871891,
                                15.098626333390571
                            ],
                            [
                                -14.538049279472158,
                                15.094968207470785
                            ],
                            [
                                -14.531647559112534,
                                15.093139144510893
                            ],
                            [
                                -14.528903964672695,
                                15.093139144510893
                            ],
                            [
                                -14.525245838752909,
                                15.089481018591107
                            ],
                            [
                                -14.52250224431307,
                                15.087651955631214
                            ],
                            [
                                -14.51975864987323,
                                15.084908361191376
                            ],
                            [
                                -14.51975864987323,
                                15.08399382971143
                            ],
                            [
                                -14.51975864987323,
                                15.080335703791643
                            ],
                            [
                                -14.521587712833123,
                                15.075763046391911
                            ],
                            [
                                -14.52250224431307,
                                15.072104920472126
                            ],
                            [
                                -14.524331307272963,
                                15.070275857512232
                            ],
                            [
                                -14.527074901712801,
                                15.065703200112502
                            ],
                            [
                                -14.530733027632587,
                                15.065703200112502
                            ],
                            [
                                -14.531647559112534,
                                15.060216011232823
                            ],
                            [
                                -14.53256209059248,
                                15.054728822353145
                            ],
                            [
                                -14.533476622072426,
                                15.051070696433358
                            ],
                            [
                                -14.534391153552372,
                                15.043754444593787
                            ],
                            [
                                -14.53530568503232,
                                15.039181787194055
                            ],
                            [
                                -14.533476622072426,
                                15.03552366127427
                            ],
                            [
                                -14.533476622072426,
                                15.0282074094347
                            ],
                            [
                                -14.533476622072426,
                                15.022720220555021
                            ],
                            [
                                -14.530733027632587,
                                15.017233031675342
                            ],
                            [
                                -14.530733027632587,
                                15.011745842795664
                            ],
                            [
                                -14.530733027632587,
                                15.005344122436039
                            ],
                            [
                                -14.530733027632587,
                                15.001685996516253
                            ],
                            [
                                -14.530733027632587,
                                14.994369744676682
                            ],
                            [
                                -14.527989433192747,
                                14.987968024317057
                            ],
                            [
                                -14.527989433192747,
                                14.981566303957432
                            ],
                            [
                                -14.52250224431307,
                                14.976079115077754
                            ],
                            [
                                -14.520673181353176,
                                14.969677394718129
                            ],
                            [
                                -14.520673181353176,
                                14.962361142878558
                            ],
                            [
                                -14.520673181353176,
                                14.954130359559041
                            ],
                            [
                                -14.520673181353176,
                                14.948643170679363
                            ],
                            [
                                -14.520673181353176,
                                14.945899576239523
                            ],
                            [
                                -14.520673181353176,
                                14.938583324399952
                            ],
                            [
                                -14.520673181353176,
                                14.931267072560381
                            ],
                            [
                                -14.520673181353176,
                                14.924865352200756
                            ],
                            [
                                -14.52250224431307,
                                14.919378163321078
                            ],
                            [
                                -14.524331307272963,
                                14.914805505921347
                            ],
                            [
                                -14.527074901712801,
                                14.909318317041668
                            ],
                            [
                                -14.527074901712801,
                                14.907489254081774
                            ],
                            [
                                -14.527074901712801,
                                14.90383112816199
                            ],
                            [
                                -14.527989433192747,
                                14.897429407802365
                            ],
                            [
                                -14.53256209059248,
                                14.891942218922686
                            ],
                            [
                                -14.53530568503232,
                                14.887369561522954
                            ],
                            [
                                -14.538963810952104,
                                14.882796904123222
                            ],
                            [
                                -14.539878342432051,
                                14.876395183763597
                            ],
                            [
                                -14.544450999831783,
                                14.876395183763597
                            ],
                            [
                                -14.548109125751569,
                                14.875480652283651
                            ],
                            [
                                -14.549938188711462,
                                14.872737057843812
                            ],
                            [
                                -14.5526817831513,
                                14.871822526363866
                            ],
                            [
                                -14.554510846111194,
                                14.87090799488392
                            ],
                            [
                                -14.559083503510925,
                                14.869993463403972
                            ],
                            [
                                -14.564570692390603,
                                14.869993463403972
                            ],
                            [
                                -14.567314286830443,
                                14.869993463403972
                            ],
                            [
                                -14.571886944230174,
                                14.869993463403972
                            ],
                            [
                                -14.574630538670014,
                                14.869993463403972
                            ],
                            [
                                -14.580117727549693,
                                14.87090799488392
                            ],
                            [
                                -14.583775853469477,
                                14.874566120803705
                            ],
                            [
                                -14.587433979389264,
                                14.874566120803705
                            ],
                            [
                                -14.592006636788996,
                                14.874566120803705
                            ],
                            [
                                -14.596579294188727,
                                14.874566120803705
                            ],
                            [
                                -14.605724608988192,
                                14.873651589323758
                            ],
                            [
                                -14.610297266387924,
                                14.873651589323758
                            ],
                            [
                                -14.613955392307709,
                                14.873651589323758
                            ],
                            [
                                -14.618528049707441,
                                14.873651589323758
                            ],
                            [
                                -14.622186175627226,
                                14.873651589323758
                            ],
                            [
                                -14.626758833026958,
                                14.873651589323758
                            ],
                            [
                                -14.630416958946745,
                                14.873651589323758
                            ],
                            [
                                -14.634075084866529,
                                14.874566120803705
                            ],
                            [
                                -14.639562273746208,
                                14.877309715243545
                            ],
                            [
                                -14.643220399665994,
                                14.878224246723491
                            ],
                            [
                                -14.647793057065726,
                                14.880053309683383
                            ],
                            [
                                -14.652365714465457,
                                14.882796904123222
                            ],
                            [
                                -14.65693837186519,
                                14.883711435603169
                            ],
                            [
                                -14.660596497784976,
                                14.884625967083116
                            ],
                            [
                                -14.662425560744868,
                                14.884625967083116
                            ],
                            [
                                -14.665169155184707,
                                14.884625967083116
                            ],
                            [
                                -14.666998218144601,
                                14.886455030043008
                            ],
                            [
                                -14.669741812584439,
                                14.8882840930029
                            ],
                            [
                                -14.673399938504225,
                                14.89102768744274
                            ],
                            [
                                -14.675229001464118,
                                14.891942218922686
                            ],
                            [
                                -14.678887127383902,
                                14.894685813362525
                            ],
                            [
                                -14.681630721823742,
                                14.895600344842471
                            ],
                            [
                                -14.685288847743529,
                                14.899258470762257
                            ],
                            [
                                -14.687117910703421,
                                14.902002065202097
                            ],
                            [
                                -14.689861505143259,
                                14.904745659641936
                            ],
                            [
                                -14.690776036623205,
                                14.906574722601828
                            ],
                            [
                                -14.692605099583099,
                                14.912061911481507
                            ],
                            [
                                -14.694434162542992,
                                14.915720037401293
                            ],
                            [
                                -14.69717775698283,
                                14.919378163321078
                            ],
                            [
                                -14.700835882902616,
                                14.92395082072081
                            ],
                            [
                                -14.702664945862509,
                                14.927608946640596
                            ],
                            [
                                -14.707237603262241,
                                14.933096135520273
                            ],
                            [
                                -14.710895729182027,
                                14.934925198480167
                            ],
                            [
                                -14.713639323621866,
                                14.936754261440059
                            ],
                            [
                                -14.715468386581758,
                                14.9394978558799
                            ],
                            [
                                -14.718211981021598,
                                14.941326918839792
                            ],
                            [
                                -14.722784638421331,
                                14.945899576239523
                            ],
                            [
                                -14.725528232861169,
                                14.94681410771947
                            ],
                            [
                                -14.730100890260902,
                                14.950472233639255
                            ],
                            [
                                -14.73284448470074,
                                14.954130359559041
                            ],
                            [
                                -14.736502610620526,
                                14.957788485478826
                            ],
                            [
                                -14.738331673580419,
                                14.95961754843872
                            ],
                            [
                                -14.740160736540311,
                                14.962361142878558
                            ],
                            [
                                -14.741989799500205,
                                14.963275674358504
                            ],
                            [
                                -14.741989799500205,
                                14.968762863238183
                            ],
                            [
                                -14.741989799500205,
                                14.978822709517594
                            ],
                            [
                                -14.741989799500205,
                                14.982480835437379
                            ],
                            [
                                -14.741989799500205,
                                14.987053492837111
                            ],
                            [
                                -14.741989799500205,
                                14.99254068171679
                            ],
                            [
                                -14.741989799500205,
                                14.994369744676682
                            ],
                            [
                                -14.741989799500205,
                                14.999856933556361
                            ],
                            [
                                -14.741989799500205,
                                15.004429590956093
                            ],
                            [
                                -14.741989799500205,
                                15.007173185395931
                            ],
                            [
                                -14.741989799500205,
                                15.010831311315718
                            ],
                            [
                                -14.741989799500205,
                                15.013574905755556
                            ],
                            [
                                -14.741989799500205,
                                15.017233031675342
                            ],
                            [
                                -14.741989799500205,
                                15.023634752034967
                            ],
                            [
                                -14.742904330980151,
                                15.0282074094347
                            ],
                            [
                                -14.742904330980151,
                                15.031865535354484
                            ],
                            [
                                -14.743818862460097,
                                15.041010850153949
                            ],
                            [
                                -14.745647925419989,
                                15.046498039033628
                            ],
                            [
                                -14.745647925419989,
                                15.053814290873198
                            ],
                            [
                                -14.745647925419989,
                                15.062959605672662
                            ],
                            [
                                -14.746562456899936,
                                15.067532263072394
                            ],
                            [
                                -14.74839151985983,
                                15.078506640831751
                            ],
                            [
                                -14.74839151985983,
                                15.086737424151268
                            ],
                            [
                                -14.741075268020257,
                                15.094053675990839
                            ],
                            [
                                -14.724613701381223,
                                15.094968207470785
                            ]
                        ]
                    ]
                ]
            }
        }
    ]
}
// Déclaration des parcelles

class AssetTransfer extends Contract {

    async InitLedger(ctx) {
        const assets = [
            {
                ID: 'asset4',
                Owner: 'BogOsso',
                Parcel: Parcel4
            },
            {
                ID: 'asset5',
                Owner: 'BogOsso',
                Parcel: Parcel5
            },
            {
                ID: 'asset7',
                Owner: 'BogOsso',
                Parcel: Parcel7
            },
            {
                ID: 'asset135',
                Owner: 'BogOsso',
                Parcel: Parcel135
            }

        ];

        for (const asset of assets) {
            asset.docType = 'asset';
            // example of how to write to world state deterministically
            // use convetion of alphabetic order
            // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
            // when retrieving data, in any lang, the order of data will be the same and consequently also the corresonding hash
            await ctx.stub.putState(asset.ID, Buffer.from(stringify(sortKeysRecursive(asset))));
        }
    }

    // CreateAsset issues a new asset to the world state with given details.
    async CreateAsset(ctx, id, owner, parcel) {
        const exists = await this.AssetExists(ctx, id);
        if (exists) {
            throw new Error(`The asset ${id} already exists`);
        }

        const asset = {
            ID: id,
            Owner: owner,
            Parcel: parcel
        };
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        await ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(asset))));
        return JSON.stringify(asset);
    }

    // ReadAsset returns the asset stored in the world state with given id.
    async ReadAsset(ctx, id) {
        const assetJSON = await ctx.stub.getState(id); // get the asset from chaincode state
        if (!assetJSON || assetJSON.length === 0) {
            throw new Error(`The asset ${id} does not exist`);
        }
        return assetJSON.toString();
    }

    // UpdateAsset updates an existing asset in the world state with provided parameters.
    async UpdateAsset(ctx, id,owner, parcel) {
        const exists = await this.AssetExists(ctx, id);
        if (!exists) {
            throw new Error(`The asset ${id} does not exist`);
        }

        // overwriting original asset with new asset
        const updatedAsset = {
            ID: id,
            Owner: owner,
            Parcel: parcel,
        };
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        return ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(updatedAsset))));
    }

    // DeleteAsset deletes an given asset from the world state.
    async DeleteAsset(ctx, id) {
        const exists = await this.AssetExists(ctx, id);
        if (!exists) {
            throw new Error(`The asset ${id} does not exist`);
        }
        return ctx.stub.deleteState(id);
    }

    // AssetExists returns true when asset with given ID exists in world state.
    async AssetExists(ctx, id) {
        const assetJSON = await ctx.stub.getState(id);
        return assetJSON && assetJSON.length > 0;
    }

    // TransferAsset updates the owner field of asset with given id in the world state.
    async TransferAsset(ctx, id, newOwner) {
        const assetString = await this.ReadAsset(ctx, id);
        const asset = JSON.parse(assetString);
        const oldOwner = asset.Owner;
        asset.Owner = newOwner;
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        await ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(asset))));
        return oldOwner;
    }

    // GetAllAssets returns all assets found in the world state.
    async GetAllAssets(ctx) {
        const allResults = [];
        // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push(record);
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }
}

module.exports = AssetTransfer;
