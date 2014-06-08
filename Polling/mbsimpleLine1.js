d3.json("Polling/mbsimpleLine1.json", function(error, data) {

nv.addGraph(function() {
  var chart = nv.models.lineWithFocusChart()
        .x(function(d) { return d[0] })
        .y(function(d) { return d[1] / 100 })
        .transitionDuration(750)  //how fast do you want the lines to transition?
        .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
        //.showYAxis(true)        //Show the y-axis
        //.showXAxis(true)        //Show the x-axis
  ;
 
    
    chart.xAxis
 .tickValues([1354286240000,1364740640000,1367332640000,1375281440000,1383230240000,1385822240000,1391179040000]) //note: using epoch time = milliseconds since 1/1/1970
        .tickFormat(function(d) {
        return d3.time.format('%m/%y')(new Date(d))
          })
        .axisLabel('Month / Year')
    ;
    
    chart.x2Axis            
        .tickValues([1354286240000,1364740640000,1367332640000,1375281440000,1383230240000,1385822240000,1391179040000]) //note: using epoch time = milliseconds since 1/1/1970
        .tickFormat(function(d) {
        return d3.time.format('%m/%y')(new Date(d))
          })
  
    chart.yAxis     //Chart y-axis settings
        .tickFormat(d3.format('%x'))
        .axisLabel('Percentage');

    chart.y2Axis
        .tickFormat(d3.format('%x'))
        .axisLabel('Percentage');


  d3.select('#chart svg')
      .datum(data)
      .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
})
});