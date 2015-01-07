$( document ).ready(function() {

  var data = [
    {
      name: "Department A",
      spend: 30,
      subdept: {
        name: "Department A1",
        spend: 28
      }
    },
    {
      name: "Department B",
      spend: 40,
      subdept: {
        name: "Department B1",
        spend: 32
      }
    },
    {
      name: "Department C",
      spend: 50,
      subdept: {
        name: "Department C1",
        spend: 50
      }
    },
    {
      name: "Department D",
      spend: 10,
      subdept: {
        name: "Department D1",
        spend: 3
      }
    },
    {
      name: "Department E",
      spend: 50,
      subdept: {
        name: "Department E1",
        spend: 45
      }
    },
    {
      name: "Department F",
      spend: 50,
      subdept: {
        name: "Department F1",
        spend: 40
      }
    },
    {
      name: "Department G",
      spend: 25,
      subdept: {
        name: "Department G1",
        spend: 20
      }
    },
    {
      name: "Environment",
      spend: 10,
      subdept: {
        name: "Department H1",
        spend: 8
      }
    },
    {
      name: "Department I",
      spend: 10,
      subdept: {
        name: "Department I1",
        spend: 5
      }
    }
  ];


var totalRadius = 0;
data.forEach(function(department) {
  totalRadius = totalRadius + (department.spend * department.spend);
})

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

var totalSpend = chart.append("g")
  .attr("id", "total");

totalSpend.append("circle")
  .attr("r", function() {return (Math.sqrt(totalRadius) * (chartWidth * 0.0025));})
  .attr("cx", function() {return (chartWidth / 2);})
  .attr("cy", function() {return (chartHeight /2 );})
  .attr("id", "totalSpend");

var departments = chart.selectAll("#circles")
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

var subdepartments = departments.append("g")
  .attr("x", 0)
  .attr("y", 0);


subdepartments.append("circle")
  .attr("class", function(d) {return d.subdept.name})
    .attr("r", function(d) {return d.subdept.spend})
    .attr("cx", 0)
    .attr("cy", 0);

// subdepartments.append("text")
//   .attr("x", function(d, i) {return (chartHeight / 8 * Math.cos(i* theta));})
//   .attr("y", function(d, i) {return (chartHeight / 8 * Math.sin(i* theta));})
//   .text(function(d) { return d.subdept.name});

departments.append("text")
  .attr("x", function(d, i) {return (chartHeight / 3.8 * Math.cos(i* theta));})
  .attr("y", function(d, i) {return (chartHeight / 3.8 * Math.sin(i* theta));})
  .text(function(d) { return d.name});

});
