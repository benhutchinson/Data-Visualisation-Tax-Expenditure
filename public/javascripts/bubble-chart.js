$( document ).ready(function() {

var data = [
  {"department":"Education","spend":56749},
  {"department":"HM Revenue & Customs","spend":46562},
  {"department":"Scottish Government","spend":34739},
  {"department":"Work & Pensions","spend":170579},
  {"department":"Ministry of Defence","spend":43340},
  {"department":"Health","spend":115398}
  ];

var colors = ["#14afde", "#e9b809", "#58b214", "#e01857", "#706a73", "#5016a2"]

var chartWidth = 960;
var chartHeight = 600;
var reduction = 0.0005;

var totalRadius = 0;
data.forEach(function(department) {
  totalRadius = totalRadius + ((department.spend*reduction) * (department.spend*reduction));
})

var chart = d3.selectAll(".chart")
  .style({'stroke': 'black', 'stroke-width': '2', 'width': chartWidth, 'height': chartHeight})
  .append("g")
  .attr("id", "circles");

var totalSpend = chart.append("g")
  .attr("id", "total");

totalSpend.append("circle")
  .attr("r", function() {return (Math.sqrt(totalRadius) * (chartHeight * 0.0025));})
  .attr("cx", function() {return (chartWidth / 2.7);})
  .attr("cy", function() {return (chartHeight / 2 );})
  .attr("id", "totalSpend");

var departments = chart.selectAll("#circles")
  .data(data)
  .enter().append("g")
  .attr("transform", function() { return "translate(" + chartWidth/2.7 + "," + chartHeight/2 + ")"; })
  .attr("class", function(d, i) {return "circle" + " " + d.department ; })
  .attr("id", function(d,i) {return "circle-" + i; });

var theta = 2 * Math.PI / data.length;

departments.append("circle")
  .attr("r", function(d) {return  (d.spend*reduction) * chartHeight * 0.0025;})
  .attr("cx", function(d, i) {return (chartWidth / 5.5 * Math.cos(i* theta));})
  .attr("cy", function(d, i) {return (chartWidth / 5.5 * Math.sin(i* theta));})
  .style("fill", function(d, i) { return colors[i] });


var legend = d3.selectAll(".chart")
  .append("g")
  .attr("id", "legend")
  .attr("transform", function() { return "translate(" + (chartWidth-260) + "," + (chartHeight-325) + ")"; });

var row = d3.selectAll(".chart")
  .select("#legend")
  .selectAll("g")
  .data(data)
  .enter().append("g")
  .attr("class", "row")
  .attr("id", function(d,i) {return "row-" + i; })
  .attr("transform", function(d, i) { return "translate(" + 0 + "," + i * 20 + ")"; });

var labels = d3.selectAll(".chart")
  .select("#legend")
  .selectAll(".row")
  .append("text")
  .text(function(d) { return d.department});

var keys = d3.selectAll(".chart")
  .select("#legend")
  .selectAll(".row")
  .append("circle")
  .attr("transform", function(d, i) { return "translate(" + -30 + "," + -5 + ")"; })
  .attr("r", 10)
  .style("fill", function(d, i) { return colors[i] });

  $("#circles .circle").on('click', function() {
    var id = $(this).attr("id").slice(-1);
    $('#row-' + id).animate({
      opacity: 0.25
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500, function() {});
    });
  });

  $("#legend .row").on("click", function() {
    var id = $(this).attr("id").slice(-1);
    $('#circle-' + id).animate({
      opacity: 0.25
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500, function() {});
    });
  });

});
