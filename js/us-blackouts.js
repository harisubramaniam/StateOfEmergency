$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 229
        },
        {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 466
        },
        {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 297
        },
        {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 537
        },
        {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 4358
        },
        {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 602
        },
        {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 595
        },
        {
            "state_name": "Washington D.C.",
            "hc-key": "us-dc",
            "value": 180
        },
        {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 138
        },
        {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 856
        },
        {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 568
        },
        {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 277
        },
        {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 429
        },
        {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 378
        },
        {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 879
        },
        {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 695
        },
        {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 381
        },
        {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 331
        },
        {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 453
        },
        {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 833
        },
        {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 379
        },
        {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 321
        },
        {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 1385
        },
        {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 459
        },
        {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 637
        },
        {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 263
        },
        {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 341
        },
        {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 1000
        },
        {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 196
        },
        {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 326
        },
        {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 281
        },
        {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 914
        },
        {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 196
        },
        {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 410
        },
        {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 1541
        },
        {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 1369
        },
        {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 504
        },
        {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 700
        },
        {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 1278
        },
        {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 107
        },
        {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 446
        },
        {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 170
        },
        {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 593
        },
        {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 1621
        },
        {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 352
        },
        {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 883
        },
        {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 142
        },
        {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 1034
        },
        {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 776
        },
        {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 363
        },
        {
            "state_name": "Wyoming",
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
        },
        lang: {
            thousandsSep: ','
        }
    });

    // Initiate the chart
    $('#container').highcharts('Map', {
        legend: {
            enabled: false
        },

        chart: {
            backgroundColor: '#EFEEE8',
            marginTop: 0,
            marginBottom: 0
        },

        title : {
            // enabled: false,
            text : '',
            floating: true,
            verticalAlign: 'top',
            margin: 0
        },

        subtitle : {
            // enabled: false,
            text : ''
        },

        plotOptions: {
            mapline: {
                showInLegend: false,
                enableMouseTracking: false
            }
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

        tooltip: {
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Outages: <b>{point.value}</b>"
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
