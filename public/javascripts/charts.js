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
  google.load('visualization', '1.0', {'packages':['corechart']});

  google.setOnLoadCallback(drawBarChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawBarChart() {

    var jsonData = $.ajax({
      url: "json/google_corecharts_format_data.json",
      dataType:"json",
      async: false
    }).responseText;

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable(jsonData);

    var w = 0.5*(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var h = 0.5*(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    // Set chart options
    var options = {'width':w,'height':h, 'chartArea': {'top': 0}};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
  chart.draw(data, options);
  }

  google.setOnLoadCallback(drawPieChart);

  function drawPieChart() {

    var jsonData = $.ajax({
      url: "json/google_corecharts_format_data.json",
      dataType:"json",
      async: false
    }).responseText;

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable(jsonData);

    var w = 0.5*(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var h = 0.5*(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    // Set chart options
    var options = {'width':w,'height':h,'is3D':true, 'chartArea': {'left': 0, 'top': 0} };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    chart.draw(data, options);
  }

  google.load("visualization", "1", {packages:["gauge"]});
  google.setOnLoadCallback(drawChart);

  function drawChart() {

    // Create our data table out of JSON data loaded from server.

      var dataTrue = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Work (m)', 382]
          ]);

      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ["Work (m)", 0]
      ]);

      var options = {
        max: 400,
        min: 0,
        width: 350, height: 350,
        redFrom: 300, redTo: 400,
        yellowFrom:200, yellowTo: 300,
        minorTicks: 4,
        animation:{
          duration: 10000,
          easing: 'inAndOut',
        }
      };

      var chart = new google.visualization.Gauge(document.getElementById('gauge_chart'));

      chart.draw(data, options);

      setInterval(function() {
        chart.draw(dataTrue, options);
      }, 10000);

    }
