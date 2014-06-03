d3.json("Polling/mbsimpleLine2.json", function(error, data) {

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
        .tickValues([1338587272000,1354233600000,1359590400000,1367280000000,1375228800000,1383264000000,1385769600000,1391126400000]) //note: using epoch time = milliseconds since 1/1/1970
        .tickFormat(function(d) {
        return d3.time.format('%m/%y')(new Date(d))
          })
        .axisLabel('Month / Year')
    ;
    
    chart.x2Axis            
        .tickValues([1338587272000,1354233600000,1359590400000,1367280000000,1375228800000,1383264000000,1385769600000,1391126400000]) //note: using epoch time = milliseconds since 1/1/1970
        .tickFormat(function(d) {
        return d3.time.format('%m/%y')(new Date(d))
          })
  
    chart.yAxis     //Chart y-axis settings
        .tickFormat(d3.format('%x'))
        .axisLabel('Percentage');

    chart.y2Axis
        .tickFormat(d3.format('%x'))
        .axisLabel('Percentage');


  d3.select('#chart3 svg')
      .datum(data)
      .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
})
});




   /*

  chart.xAxis     //Chart x-axis settings
    

  

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(data)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  //nv.utils.windowResize(function() { chart.update() });
    nv.utils.windowResize(chart.update);
  return chart;
})
});

*/