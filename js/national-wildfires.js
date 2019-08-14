var data = null;
var fires_data = null;

function start(){
    $.getJSON("data/national-wildfires.json", function(fires){
        fires_data = fires;
        getFireData();
    })
    // .error(function(jqXHR, textStatus, errorThrown) {
    //     console.log("error " + textStatus);
    //     console.log(errorThrown);
    // })
}

start();

function getFireData() {
    var i = 0;
    var year_arr = [];
    var supp_cost_arr = [];
    var overall_loss_arr = [];

    for (var i = 0; i < fires_data.length; i++) {
        year_arr.push(fires_data[i].year);
        supp_cost_arr.push({y: fires_data[i].sup_cost, myData: fires_data[i].myData});
        overall_loss_arr.push({y: fires_data[i].overall_loss});
    }
    // console.log("years: ", year_arr);

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
            thousandsSep: ',',
            numericSymbols: [" k", " M", " B", " T", "P", "E"]
        }
    });

    Highcharts.chart('container', {

        chart: {
            backgroundColor: '#EFEEE8',
            type: 'line'
        },

        credits: {
            enabled: false
            // text: '',
            // href: ''
        },

        exporting: {
            enabled: false
        },

        title: {
            text: null,
            margin: 0
        },
    
        // subtitle: {
        //     text: null,
        //     margin: 0
        // },

        legend: {
            itemDistance: 50,
            x: 0,
            y: 0,
            // padding: 5,
            itemSytle: {
                fontFamily: "Roboto Slab",
                fontSize: ".85rem"
            },
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            padding: 1
        },
        xAxis: {
            tickInterval: 3,
            crosshair: {
                width: 2,
                color: "gray",
                dashStyle: 'shortdot'
            },
            labels: {
                style: {
                    color: "#330033",
                    fontFamily: "Noto Sans JP",
                    fontSize: "'1em"
                }
            },
            // plotLines: [{
            //     value: 2015,
            //     label: {
            //         useHTML: true,
            //         text: '<strong>Some text goes here, if you want</strong>',
            //         verticalAlign: 'top',
            //         textAlign: 'center',
            //         rotation: 360,
            //         x: 70,
            //         y: 15
            //     },
            //     width: 1,
            //     dashStyle: 'dash',
            //     color: '#9E2531',
            // }],
            categories: year_arr
        },
        yAxis: {
            labels: {
                formatter: function() {
                    return '$' + this.axis.defaultLabelFormatter.call(this);
                },
                style: {
                    color: "#330033",
                    fontFamily: "Noto Sans JP",
                    fontSize: "1em"
                }
            },
            title: {
                style: {
                    fontFamily: "Noto Sans JP",
                    fontSize: "1em"
                },
                text: null
            }
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1989
            }
        },

        tooltip: {
            headerFormat: '<b>{point.x}</b><br>',
            // pointFormat: '<span style="color:{series.color}">{series.name}:</span> <b>${point.y}</b><br />',
            pointFormat: '{point.myData}',
            shared: true
            // formatter: function () {
            //     var series = this.series;
            //     return '<span class="report-year"><b>'+ this.x +'</b></span><br>Suppresion Costs:&nbsp;<b>'+ this.y +'</b><br>Overall Costs: <b>'+ this.point.myData +'</b>';
            // }
        },

        series: [{
            name: "Federal Suppresion Costs",
            color: '#A10D03',
            lineWidth: 3,
            data: supp_cost_arr,
            marker: {
                symbol: "circle",
                radius: 1
            }
        }, {
            name: "Overall Wildfire Losses",
            color: "#545F8B",
            lineWidth: 3,
            data: overall_loss_arr,
            marker: {
                symbol: "circle",
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
}