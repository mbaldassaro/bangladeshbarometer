d3.json("Polling/mbmultiBar5.json", function(error, data) {
     
var chart;
    
nv.addGraph(function() {
  chart = nv.models.multiBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value / 100 })
      .margin({top: 30, right: 20, bottom: 50, left: 75})
      //.showValues(false)
      //.tooltips(true)
      //.barColor(d3.scale.category10().range())
      .transitionDuration(500)
      //.stacked(true)
      //.showControls(false)
  ;

  chart.yAxis 
    .tickFormat(d3.format('%'));

  d3.select('#chart4 svg')
      .datum(data)
      .call(chart);

  nv.utils.windowResize(chart.update);

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart;
});
})