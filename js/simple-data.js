// var json = [{"value":12,"name":"platform1","key":"event4"},{"value":10,"name":"platform1","key":"event1"},{"value":14,"name":"platform1","key":"event3"},{"value":9,"name":"platform1","key":"event2"},{"value":8,"name":"platform2","key":"event4"},{"value":10,"name":"platform2","key":"event3"},{"value":11,"name":"platform2","key":"event1"},{"value":13,"name":"platform2","key":"event2"},{"value":16,"name":"platform3","key":"event3"},{"value":9,"name":"platform3","key":"event2"},{"value":13,"name":"platform3","key":"event4"},{"value":13,"name":"platform3","key":"event1"},{"value":9,"name":"platform4","key":"event1"},{"value":17,"name":"platform4","key":"event2"},{"value":17,"name":"platform4","key":"event4"},{"value":11,"name":"platform4","key":"event3"}];

$.getJSON('data/wf-data.json', function(fires) {
    // var processed_json = [];
    var dataXAxis = [];
    var dataPointsRight = [];
    var dataPointsLeft = [];
    // $.map(fires, function(obj, i) {
    //     processed_json.push([parseInt(obj.year), parseInt(obj.sup_cost), parseInt(obj.overall_loss), obj.myData]);        
    // });
    
    for (var i = 0; i < fires.length; i++) {
        dataXAxis.push(fires[i].year);
        dataPointsRight.push({y: fires[i].sup_cost, myData: fires[i].myData});
        dataPointsLeft.push({y: fires[i].overall_loss});
    }
    console.log("years: ", dataXAxis);
    // console.log("dataPointsRight: ", dataPointsRight);

    $('#container').highcharts({
        chart: {
            backgroundColor: '#EFEEE8',
            type: 'line'
        },
        xAxis: {
            crosshair: {
                width: 1,
                color: '#BADA55'
            },
            categories: dataXAxis
        },
        tooltip: {
            shared: true,
            // formatter: function() {
            //     // return this.x + '<br>Branch: <b>'+ this.point.sup_cost + '</b><br/>Platform: {point.myData}';
            //     var series = this.series;
            //     // return this.y+" <br> "+this.point.myData;
            //     // console.log("series name: ", series.name);
            //     if (series.name == "Suppresed Costs") {
            //         return "<b>" + this.x + "</b>" + " <br> " + this.point.myData;
            //     } else {
            //         return this.y;
            //     }
                
            // }
            headerFormat: '{point.x}<br />',
            pointFormat: '{point.myData}'
        },
        plotOptions: {
            series: {
                label: {
                connectorAllowed: false
                },
                pointStart: 1989
            }
        },
        series: [{
            name : 'Suppresed Costs',
            data: dataPointsRight
            // data: [
            //     {sup_cost: 920529000, myData: "num_fires: 78792, acres_burned: 5921786, ff_deaths: 15, struct_lost: 1899, less_than_100K: 11, significant_fires: 24"},
            //     {sup_cost: 809499000, myData: "num_fires: 78792, acres_burned: 5921786, ff_deaths: 15, struct_lost: 1899, less_than_100K: 11, significant_fires: 24"},
            //     {sup_cost: 1374525000, myData: "num_fires: 78792, acres_burned: 5921786, ff_deaths: 15, struct_lost: 1899, less_than_100K: 11, significant_fires: 24"}
            // ]
        }, {
            name: 'Overall Loss',
            // data: dataPointsLeft
            data: [310000000,360000000,1800000000]
            // enableMouseTracking: false
        }]
    });

})

