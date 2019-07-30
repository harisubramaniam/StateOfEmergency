(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Noto Sans JP',
            fontWeight: 200
        },
        backgroundColor: '#EFEFEF'
    },
    lang: { 
        thousandsSep: ','
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

Highcharts.chart("container1", {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Total Outages',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>',
        headerFormat: '<b>{point.key} </b><br />'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Total Outages',
        colorByPoint: true,
        data: [{
            name: 'Animal',
            y: 5.79,
            color: '#9E2531'
        }, {
            name: 'Faulty Equipment/Human Error',
            y: 26.49,
            color: '#87A0AF'
        }, {
            name: 'Overdemand',
            y: .17,
            color: '##B3B1AC'
        }, {
            name: 'Planned',
            y: 5.46,
            color: '#D9CBBA'
        }, {
            name: 'Theft/Vandalism',
            y: .65,
            color: '#F2E2C4'
        }, {
            name: 'Unknown',
            y: 18.38,
            color: '#59514C'
        }, {
            name: 'Vehicle Accident',
            y: 10.31,
            color: '#8D9FA6'
        }, {
            name: 'Weather/Falling Tree',
            y: 32.75,
            sliced: true,
            selected: true,
            color: '#403836'
        }]
    }]
});
Highcharts.chart("container2", {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Affected Customers',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>',
        headerFormat: '<b>{point.key} </b><br />'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Affected Customers',
        colorByPoint: true,
        data: [{
            name: 'Animal',
            y: 2.31,
            color: '#9E2531'
        }, {
            name: 'Faulty Equipment/Human Error',
            y: 17.88,
            color: '#87A0AF'
        }, {
            name: 'Overdemand',
            y: .20,
            color: '##B3B1AC'
        }, {
            name: 'Planned',
            y: .81,
            color: '#D9CBBA'
        }, {
            name: 'Theft/Vandalism',
            y: .24,
            color: '#F2E2C4'
        }, {
            name: 'Unknown',
            y: 5.04,
            color: '#59514C'
        }, {
            name: 'Vehicle Accident',
            y: 1.74,
            color: '#8D9FA6'
        }, {
            name: 'Weather/Falling Tree',
            y: 71.77,
            sliced: true,
            selected: true,
            color: '#403836'
        }]
    }]
});