$(function () {
    // Set map common options
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto Mono'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    $('#container').highcharts('Map', {
        legend: {
            enabled: false
        },
        chart: {
            backgrondColor: '#EFEEE8'
        },
        title: {
            text: null,
            floating: true,
            verticalAlign: 'top',
            margin: 0,
            style: {
                fontWeight: '700',
                fontSize: '1.5em',
                fontFamily: 'Roboto Mono'
            }
        },
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: '{point.name}'
        },
        series: [{
            // mapData: Highcharts.maps['countries/us/us-ca-all'],
            // joinBy: 'hc-key',
            // datalabels: {
            //     enabled: false,
            //     format: '{point.name}'
            // }
            type: "map",
            data: [{
                    name: "California",
                    color: "#BADA55",
                    path: "M506,-447L496,-409L510,-389L538,-345L540,-343L540,-339L542,-337L536,-333L536,-329L534,-327L532,-323L534,-321L534,-319L532,-317L506,-321L504,-329L504,-333L498,-339L496,-341L494,-343L492,-345L488,-347L488,-349L486,-351L476,-355L476,-363L474,-365L474,-369L472,-375L470,-379L468,-381L468,-385L470,-387L470,-389L468,-391L466,-393L468,-401L468,-399L470,-397L470,-399L468,-403L472,-405L470,-405L468,-403L468,-401L466,-405L464,-411L462,-413L460,-421L460,-425L462,-427L462,-431L460,-435L460,-437L460,-441L464,-445L464,-447L466,-451L466,-457L468,-459L506,-447z"
                },
                {
                name: "Harbison Canyon",
                color: "#6042F5",
                path: "M0,-782,14,-787,20,-801,107,-841,152,-843,223,-865,302,-929,373,-918,421,-921,470,-926,536,-951,585,-967,643,-976L698,-976L727,-975L727,-963L699,-969,690,-946,682,-944,676,-908,691,-874,693,-846,690,-836,702,-821,701,-813,707,-811,711,-772,714,-768,707,-733,698,-719,718,-686,732,-680L763,-680L782,-681,786,-689,808,-684,797,-671,783,-639,797,-629,780,-593,797,-581,821,-548,836,-504,855,-495,860,-496,868,-479,878,-469,889,-468,896,-455,892,-410,848,-401,860,-311,817,-241,788,-222,759,-216,749,-222,744,-211,735,-176L723,-176L698,-154,672,-138,658,-119,608,-71,581,-2,554,12,531,13,502,21,405,24,395,-10,402,-107,417,-175,413,-191,422,-219,415,-251,453,-313,467,-319,431,-359,384,-366,338,-371,288,-360,272,-365,263,-364,242,-368L237,-384,210,-358L206,-358L190,-345,188,-385,200,-427,204,-446,225,-462,247,-510,235,-534,200,-571,204,-628,239,-629,223,-639,102,-633,63,-659,34,-710,20,-724z"
            }]
        }]
        // {
        //     name: 'Separators',
        //     type: 'mapline',
        //     data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
        //     color: 'silver',
        //     showInLegend: true,
        //     enableMouseTracking: false
        // }
            
    });
});