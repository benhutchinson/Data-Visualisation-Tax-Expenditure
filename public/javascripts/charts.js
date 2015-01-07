$( document ).ready(function() {

  var data = [
{
  name: "Department A",
  spend: 30
},
{
  name: "Department B",
  spend: 40
},
{
  name: "Department C",
  spend: 50
},
{
  name: "Department D",
  spend: 10
},
{
  name: "Department E",
  spend: 50
},
{
  name: "Department F",
  spend: 50
},
{
  name: "Department G",
  spend: 25
},
{
  name: "Department H",
  spend: 10
}
];

// // VERSION 1
// var width = 960,
//   height = 500;
//
// var barWidth = width / data.length;
//
// var y = d3.scale.linear()
//   .domain([0, d3.max(data, function(d) { return d.spend; })])
//   .range([height, 0]);
//
// var x = d3.scale.ordinal()
//   .domain(data.map(function(d) { return d.name; }))
//   .rangeBands([0, width], .1);
//
// var margin = {top: 20, right: 30, bottom: 30, left: 40},
//   width = 960 - margin.left - margin.right,
//   height = 500 - margin.top - margin.bottom;
//
// var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient("bottom");
//
// var chart = d3.select(".chart")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
// var bar = chart.selectAll("g")
//   .data(data)
//   .enter().append("g")
//   .attr("transform", function(d, i) { return "translate(" + i * barWidth + ", 0)"; });
//
// bar.append("rect")
//   .attr("y", function(d) { return y(d.spend); })
//   .attr("height", function(d) {return height - y(d.spend); })
//   .attr("width", barWidth - 1);
//
// bar.append("text")
//   .attr("x", barWidth /2 )
//   .attr("y", function(d) {return y(d.spend) + 10; })
//   .attr("dy", ".35em")
//   .text(function(d) { return d.name; });
//
// chart.append("g")
//   .attr("class", "x axis")
//   .attr("transform", "translate(0," + height + ")")
//   .call(xAxis);

// VERSION 2

var width = 800;
var height = 720;

var x = d3.scale.linear()
.domain([0, d3.max(data, function(d) { return d.spend; })])
.range([0, width]);

var y = d3.scale.linear()
.domain([0, d3.max(data, function(d) { return d.spend; })])
.range([height, 0]);

var chart = d3.select(".chart")
.style({'stroke': 'black', 'stroke-width': '2', 'width': '100%', 'height': '100%'})
.append("g")
.attr("id", "circles");

var chartWidth = parseInt(d3.select(".chart").style("width"));
var chartHeight = parseInt(d3.select(".chart").style("height"));

var circles = chart.selectAll("g")
.data(data)
.enter().append("g")
.attr("transform", function() { return "translate(" + chartWidth/2 + "," + chartHeight/2 + ")"; })
.attr("class", function(d, i) {return "circle" + " " + d.name ; })
.attr("id", function(d,i) {return "circle-" + i; });

xPosition = function(index) {
  return Math.cos(index) * chartWidth/4
}

yPosition = function(index) {
  return Math.sin(index) * chartHeight/4
}

circles.append("circle")
.attr("cx", function(d, i) {return xPosition(i);})
.attr("cy", function(d, i) {return yPosition(i);})
.attr("r", function(d) {return d.spend * chartWidth * 0.0005;})

circles.append("text")
.attr("x", function(d, i) {return xPosition(i);})
.attr("y", function(d, i) {return yPosition(i);})
.text(function(d) { return d.name})
});
