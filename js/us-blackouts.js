$(function () {

    // Prepare demo data
    var data = [
        {
            "state": "Alaska (AK)",
            "hc-key": "us-ak",
            "value": 229
        },
        {
            "state": "Alabama (AL)",
            "hc-key": "us-al",
            "value": 466
        },
        {
            "state": "Arkansas (AR)",
            "hc-key": "us-ar",
            "value": 297
        },
        {
            "state": "Arizona (AR)",
            "hc-key": "us-az",
            "value": 537
        },
        {
            "state": "California (CA)",
            "hc-key": "us-ca",
            "value": 4358
        },
        {
            "state": "Colorado (CO)",
            "hc-key": "us-co",
            "value": 602
        },
        {
            "state": "Connecticut (CT)",
            "hc-key": "us-ct",
            "value": 595
        },
        {
            "state": "Washington D.C.",
            "hc-key": "us-dc",
            "value": 180
        },
        {
            "state": "Delaware (DE)",
            "hc-key": "us-de",
            "value": 138
        },
        {
            "state": "Florida (FL)",
            "hc-key": "us-fl",
            "value": 856
        },
        {
            "state": "Georgia (GA)",
            "hc-key": "us-ga",
            "value": 568
        },
        {
            "state": "Hawaii (HI)",
            "hc-key": "us-hi",
            "value": 277
        },
        {
            "state": "Iowa (IA)",
            "hc-key": "us-ia",
            "value": 429
        },
        {
            "state": "Idaho (ID)",
            "hc-key": "us-id",
            "value": 378
        },
        {
            "state": "Illinois (IL)",
            "hc-key": "us-il",
            "value": 879
        },
        {
            "state": "Indiana (IN)",
            "hc-key": "us-in",
            "value": 695
        },
        {
            "state": "Kansas (KS)",
            "hc-key": "us-ks",
            "value": 381
        },
        {
            "state": "Kentucky (KY)",
            "hc-key": "us-ky",
            "value": 331
        },
        {
            "state": "Louisiana (LA)",
            "hc-key": "us-la",
            "value": 453
        },
        {
            "state": "Massachusetts (MA)",
            "hc-key": "us-ma",
            "value": 833
        },
        {
            "state": "Maryland (MD)",
            "hc-key": "us-md",
            "value": 379
        },
        {
            "state": "Maine (ME)",
            "hc-key": "us-me",
            "value": 321
        },
        {
            "state": "Michigan (MI)",
            "hc-key": "us-mi",
            "value": 1385
        },
        {
            "state": "Minnesota (MN)",
            "hc-key": "us-mn",
            "value": 459
        },
        {
            "state": "Missouri (MO)",
            "hc-key": "us-mo",
            "value": 637
        },
        {
            "state": "Mississippi (MS)",
            "hc-key": "us-ms",
            "value": 263
        },
        {
            "state": "Montana (MT)",
            "hc-key": "us-mt",
            "value": 341
        },
        {
            "state": "North Carolina (NC)",
            "hc-key": "us-nc",
            "value": 1000
        },
        {
            "state": "North Dakota (ND)",
            "hc-key": "us-nd",
            "value": 196
        },
        {
            "state": "Nebraska (NE)",
            "hc-key": "us-ne",
            "value": 326
        },
        {
            "state": "New Hampshire (NH)",
            "hc-key": "us-nh",
            "value": 281
        },
        {
            "state": "New Jersey (NJ)",
            "hc-key": "us-nj",
            "value": 914
        },
        {
            "state": "New Mexico (NM)",
            "hc-key": "us-nm",
            "value": 196
        },
        {
            "state": "Nevada (NV)",
            "hc-key": "us-nv",
            "value": 410
        },
        {
            "state": "New York (NY)",
            "hc-key": "us-ny",
            "value": 1541
        },
        {
            "state": "Ohio (OH)",
            "hc-key": "us-oh",
            "value": 1369
        },
        {
            "state": "Oklahoma (OK)",
            "hc-key": "us-ok",
            "value": 504
        },
        {
            "state": "Oregon (OR)",
            "hc-key": "us-or",
            "value": 700
        },
        {
            "state": "Pennsylvania (PA)",
            "hc-key": "us-pa",
            "value": 1278
        },
        {
            "state": "Rhode Island (RI)",
            "hc-key": "us-ri",
            "value": 107
        },
        {
            "state": "South Carolina (SC)",
            "hc-key": "us-sc",
            "value": 446
        },
        {
            "state": "South Dakota (SD)",
            "hc-key": "us-sd",
            "value": 170
        },
        {
            "state": "Tennessee (TN)",
            "hc-key": "us-tn",
            "value": 593
        },
        {
            "state": "Texas (TX)",
            "hc-key": "us-tx",
            "value": 1621
        },
        {
            "state": "Utah (UT)",
            "hc-key": "us-ut",
            "value": 352
        },
        {
            "state": "Virginia (VA)",
            "hc-key": "us-va",
            "value": 883
        },
        {
            "state": "Vermont (VT)",
            "hc-key": "us-vt",
            "value": 142
        },
        {
            "state": "Washington (WA)",
            "hc-key": "us-wa",
            "value": 1034
        },
        {
            "state": "Wisconsin (WI)",
            "hc-key": "us-wi",
            "value": 776
        },
        {
            "state": "West Virginia (WV)",
            "hc-key": "us-wv",
            "value": 363
        },
        {
            "state": "Wyoming (WY)",
            "hc-key": "us-wy",
            "value": 98
        }
    ];

    // Setup map params
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Noto Sans JP'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    // Initiate the chart
    $('#container').highcharts('Map', {
        legend: {
            enabled: false
        },

        chart: {
            backgroundColor: '#EFEFEF',
            marginTop: 0,
            marginBottom: 0
        },

        title : {
            text : '',
            floating: true,
            verticalAlign: 'top',
            margin: 0
        },

        subtitle : {
            text : ''
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            dataClasses: [{
                from: 80,
                to: 199,
                color: '#FFFFFF'
            }, {
                from: 200,
                to: 399,
                color: 'rgba(161, 13, 3, .1)'
            }, {
                from: 400,
                to: 699,
                color: 'rgba(161, 13, 3, .3)'
            }, {
                from: 700,
                to: 999,
                color: 'rgba(161, 13, 3, .4)'
            }, {
                from: 1000,
                to: 1299,
                color: 'rgba(161, 13, 3, .5)'
            }, {
                from: 1300,
                to: 1499,
                color: 'rgba(161, 13, 3, .7)'
            }, {
                from: 1500,
                to: 2999,
                color: 'rgba(161, 13, 3, .8)'
            }, {
                from: 3000,
                to: 5999,
                color: 'rgba(161, 13, 3, 1)'
            }]
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Power Outages',
            states: {
                hover: {
                    color: '#171717'
                }
            },
            dataLabels: {
                allowOverlap: true,
                enabled: true,
                formatter: function(){
                    if(this.key === "District of Columbia")
                    	return this.key;
           	 	}
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});
