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

Highcharts.chart('container', {
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
        tickInterval: 1,
        title: {
            text: 'Declaration Year'
        }
    },
    
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Federally Declared Disasters',
            style: {
                fontSize: '1rem',
                fontFamily: 'Roboto Slab'
            }
        }
    },

    legend: {
        x: 0,
        y: 0,
        padding: 5,
        itemStyle: {
            fontFamily: 'Roboto Slab',
            fontSize: '1rem'
        },
        verticalAlign: 'top'
    },

    tooltip: {
        useHTML: true,
        shared: true,
        formatter: function() {
            var points = '<table class="tip"><caption><b>'+this.x+'</b></caption>'+'<tbody>';
            $.each(this.points, function(i, point) {
                 points+='<tr><th style="color: '+point.series.color+'">'+point.series.name+': </th>'
                    + '<td style="text-align: right"><b>'+point.y+'</b></td></tr>'
            });
            points+='<tr><th>Total: </th>'
                +'<td style="text-align:right"><b>'+this.points[0].total+'</b></td></tr>'
                +'</tbody></table>';
            return points;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        },
        series: {
            pointStart: 1999
        }
    },

    series: [{
        name: 'Received IA',
        color: '#6C8C27',
        data: [37,26,25,38,40,43,20,26,33,35,21,18,38,18,9,7,11,18,17,17]
    }, {
        name: 'Did not receive IA',
        color: '#D98032',
        data: [13,19,18,11,16,25,28,26,30,40,38,63,61,29,52,38,32,28,42,42]
    }]

});