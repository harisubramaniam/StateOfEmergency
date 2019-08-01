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
            fontFamily: 'Noto Sans JP'
        }
    },
    lang: {
        thousandsSep: ','
    }
});

Highcharts.chart('container', {
    chart: {
        backgroundColor: '#EFEEE8',
        type: 'line'
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

    subtitle: {
        text: null
    },

    yAxis: {
        title: {
            text: 'Number of Federally Declared Disasters Including Each Type',
            style: {
                fontSize: '1rem'
            }
        }
    },

    xAxis: {
        tickInterval: 1
    },
  
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        backgroundColor: '#EFEEE8',
        symbolHeight: 25,
        symbolWidth: 10,
        symbolRadius: 0,
        x: 0,
        borderWidth: 0,
        borderColor: '#CCC',
        shadow: false
    },

    plotOptions: {
        series: {
            pointStart: 1999
        }
    },
    
    tooltip: {
        shared: true,
        headerFormat: '<b>{point.x}</b><br>'
    },

    series: [{
        name: 'Flooding',
        data: [22, 19, 21, 21, 28, 42, 26, 35, 43, 51, 41, 51, 53, 18, 41, 30, 29, 30, 32, 33],
        color: '#9E2531',
        lineWidth: 3,
        visible: true,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Fire',
        data: [0, 3, 0, 2, 2, 1, 0, 3, 1, 1, 1, 0, 2, 3, 4, 1, 2, 1, 1, 4],
        color: '#F2780C',
        lineWidth: 3,
        visible: true,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Mud',
        data: [2, 1, 0, 1, 5, 4, 4, 10, 5, 4, 5, 8, 5, 4, 6, 3, 12, 6, 11, 8],
        color: '#D9851E',
        lineWidth: 3,
        visible: false,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Wind',
        data: [7, 0, 0, 1, 4, 4, 1, 3, 0, 5, 9, 7, 15, 13, 7, 13, 14, 11, 16, 9],
        color: '#4A8C80',
        lineWidth: 3,
        visible: false,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Winter Storm',
        data: [7, 15, 5, 7, 11, 4, 8, 8, 12, 8, 19, 29, 17, 3, 16, 12, 12, 12, 19, 6],
        color: '#D0D8D9',
        lineWidth: 3,
        visible: true,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Landslide',
        data: [2, 0, 0, 2, 4, 6, 4, 9, 4, 3, 4, 4, 5, 6, 5, 3, 10, 6, 6, 9],
        color: '#4F5F73',
        lineWidth: 3,
        visible: false,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Hurricane',
        data: [14, 0, 0, 1, 7, 10, 11, 0, 0, 8, 0, 2, 9, 15, 3, 0, 0, 6, 12, 8],
        color: '#169EF2',
        lineWidth: 3,
        visible: true,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Tornado',
        data: [14, 9, 4, 15, 17, 13, 3, 10, 20, 27, 20, 16, 24, 8, 12, 13, 12, 10, 11, 9],
        color: '#262523',
        lineWidth: 3,
        visible: true,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Severe Storm',
        data: [25, 22, 25, 24, 30, 36, 23, 38, 48, 52, 37, 45, 43, 25, 36, 26, 26, 26, 21, 32],
        color: '#D92818',
        lineWidth: 3,
        visible: true,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }, {
        name: 'Earthquake',
        data: [0, 1, 2, 2, 0, 1, 0, 1, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 1],
        color: '#F2CB05',
        lineWidth: 3,
        visible: false,
        marker: {
            symbol: 'circle',
            radius: 1
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            }
        }]
    }
});