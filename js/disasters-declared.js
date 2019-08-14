(function(H) {
    function deferRender(proceed) {
        var series = this,
            $renderTo = $(this.chart.container.parentNode);

        // It is not appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
        } else { // Hasn't appeared, halt rendering until appear
            $renderTo.appear(); // Intialize appear plugin
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
            fontFamily: 'Roboto Slab'
        }
    },
    lang: {
        thousandsSep: ','
    }
});

var chart = new Highcharts.chart('container', {
    chart: {
        type: 'column',
        backgroundColor: '#EFEEE8'
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    title: {
        text: null
    },

    xAxis: {
        tickInterval: 5,
        title: {
            text: 'Declaration Year'
        },
        crossHair: true
    },

    yAxis: {
        title: {
            text: 'Number of Federally Declared Disasters'            
        }
    },

    legend: {
        enabled: false
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:1">{series.name}: </td>' + '<td style="padding:1"><b> {point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    plotOptions: {
        series: {
            pointStart: 1953,
            pointWidth:8
        }
    },

    series: [{
        name: 'Declared Disasters',
        color: '#A60A33',
        data: [13,17,18,16,16,7,7,12,12,22,20,25,25,11,11,19,29,17,17,48,46,46,38,30,22,25,42,23,15,24,21,34,27,28,23,11,31,38,43,45,32,36,32,75,44,65,50,45,45,49,56,68,48,52,63,75,59,81,99,47,62,45,43,46,59,59]
    }]
});

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Roboto Slab'
        }
    },
    lang: {
        thousandsSep: ','
    }
});
var barChart = new Highcharts.chart('containerMob', {
    chart: {
        type: 'bar',
        backgroundColor: '#EFEEE8'
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    title: {
        text: null
    },

    xAxis: {
        tickInterval: 1,
        title: {
            text: 'Declaration Year'
        },
        crossHair: true
    },

    yAxis: {
        title: {
            text: 'Number of Federally Declared Disasters'            
        }
    },

    legend: {
        enabled: false
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:1">{series.name}: </td>' + '<td style="padding:1"><b> {point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    plotOptions: {
        series: {
            pointStart: 1953
        }
    },

    series: [{
        name: 'Declared Disasters',
        color: '#A60A33',
        data: [13,17,18,16,16,7,7,12,12,22,20,25,25,11,11,19,29,17,17,48,46,46,38,30,22,25,42,23,15,24,21,34,27,28,23,11,31,38,43,45,32,36,32,75,44,65,50,45,45,49,56,68,48,52,63,75,59,81,99,47,62,45,43,46,59,59]
    }]

});
