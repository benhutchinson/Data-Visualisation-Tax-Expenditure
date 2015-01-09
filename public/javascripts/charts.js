$( document ).ready(function() {

  var data = [
    {
      name: "Department A",
      spend: 30,
      subdept: {
        name: "DepartmentA A1",
        spend: 32
      }
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
      name: "Environment",
      spend: 10
    },
    {
      name: "Department I",
      spend: 10
    }
  ];


var total = 0;

data.forEach(function(department) {
  total = total + (department.spend * department.spend);
})

console.log(total)

var chart = d3.select(".chart")
  .style({'stroke': 'black', 'stroke-width': '2', 'width': '100%', 'height': '100%'})
  .append("g")
  .attr("id", "circles");

var chartWidth = parseInt(d3.select(".chart").style("width"));
var chartHeight = parseInt(d3.select(".chart").style("height"));

var x = d3.scale.linear()
  .domain([0, d3.max(data, function(d) { return d.spend; })])
  .range([0, chartWidth]);

var y = d3.scale.linear()
  .domain([0, d3.max(data, function(d) { return d.spend; })])
  .range([chartHeight, 0]);

var totalSpend = d3.select("#circles")
  .append("g")
  .attr("id", "total"); //totalSpend = <g id=total></g>

totalSpend.append("circle")
  .attr("r", function() {return (Math.sqrt(total) * (chartWidth * 0.0025));})
  .attr("cx", function() {return (chartWidth / 2);})
  .attr("cy", function() {return (chartHeight /2 );})
  .attr("id", "totalSpend"); //totalSpend still points to <g> but with circle inside

var departments = chart.selectAll("g")
  .data(data)
  .enter().append("g")
  .attr("transform", function() { return "translate(" + chartWidth/2 + "," + chartHeight/2 + ")"; })
  .attr("class", function(d, i) {return "circle" + " " + d.name ; })
  .attr("id", function(d,i) {return "circle-" + i; });

var theta = 2 * Math.PI / data.length;

departments.append("circle")
  .attr("r", function(d) {return  d.spend * chartWidth * 0.0025;})
  .attr("cx", function(d, i) {return (chartWidth / 3.8 * Math.cos(i* theta));})
  .attr("cy", function(d, i) {return (chartWidth / 3.8 * Math.sin(i* theta));})

departments.append("text")
  .attr("x", function(d, i) {return (chartHeight / 3.8 * Math.cos(i* theta));})
  .attr("y", function(d, i) {return (chartHeight / 3.8 * Math.sin(i* theta));})
  .text(function(d) { return d.name})

  


});
=======
// $( document ).ready(function() {
//
//   var data =
//   [{"department":"Department for Environment, Food and Rural Affairs","spend":4887570},{"department":"Department for Transport","spend":23493639},{"department":"Crown Prosecution Service","spend":1186800},{"department":"Government Actuary's Department","spend":76325000},{"department":"Department for Culture, Media and Sport","spend":16893828},{"department":"Office of The Parliamentary Commissioner","spend":76325000}];
//
// var reduction = 0.000001;
//
// var totalRadius = 0;
// data.forEach(function(department) {
//   totalRadius = totalRadius + ((department.spend*reduction) * (department.spend*reduction));
//   console.log(totalRadius)
// })
//
// var chart = d3.select(".chart")
//   .style({'stroke': 'black', 'stroke-width': '2', 'width': '100%', 'height': '100%'})
//   .append("g")
//   .attr("id", "circles");
//
// var chartWidth = parseInt(d3.select(".chart").style("width"));
// var chartHeight = parseInt(d3.select(".chart").style("height"));
//
// var totalSpend = chart.append("g")
//   .attr("id", "total");
//
// totalSpend.append("circle")
//   .attr("r", function() {return (Math.sqrt(totalRadius) * (chartWidth * 0.0025));})
//   .attr("cx", function() {return (chartWidth / 2);})
//   .attr("cy", function() {return (chartHeight / 2 );})
//   .attr("id", "totalSpend");
//
// var departments = chart.selectAll("#circles")
//   .data(data)
//   .enter().append("g")
//   .attr("transform", function() { return "translate(" + chartWidth/2 + "," + chartHeight/2 + ")"; })
//   .attr("class", function(d, i) {return "circle" + " " + d.department ; })
//   .attr("id", function(d,i) {return "circle-" + i; });
//
// var theta = 2 * Math.PI / data.length;
//
// departments.append("circle")
//   .attr("r", function(d) {return  (d.spend*reduction) * chartWidth * 0.0025;})
//   .attr("cx", function(d, i) {return (chartWidth / 3.8 * Math.cos(i* theta));})
//   .attr("cy", function(d, i) {return (chartWidth / 3.8 * Math.sin(i* theta));})
//
// departments.append("text")
//   .attr("x", function(d, i) {return (chartHeight / 3.8 * Math.cos(i* theta));})
//   .attr("y", function(d, i) {return (chartHeight / 3.8 * Math.sin(i* theta));})
//   .text(function(d) { return d.department});
//
// });
>>>>>>> master
