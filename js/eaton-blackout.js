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
            fontFamily: 'Noto Sans JP'
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

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    legend: {
        align: 'center',
        x: 20,
    },
    title: {
        text: 'Eaton Blackout Tracker',
        align: 'center',
        x: 20,
        style: {
            fontWeight: '700',
            fontSize: '20px',
        }
    },
    xAxis: {
        categories: ['Animal', 'Faulty Equipment/Human Error', 'Overdemand', 'Planned', 'Theft/Vandalism', 'Unknown', 'Vehicle Accident', 'Weather/Falling Tree']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Outages percentage'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>({point.percentage:.0f}%)</b> <br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        },
        series: {
            pointPadding: 0.05,
            groupPadding: 0.1,
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: '% of Total Outages',
        data: [5.79, 26.49, .17, 5.46, .65, 18.38, 10.31, 32.75],
        color: '#9E2531'
    }, {
        name: '% of Affected Customers',
        data: [2.31, 17.88, .20, .81, .24, 5.04, 1.74, 71.77],
        color: '#95B56E'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            }
        }]
    }
});