// bar chart

google.load('visualization', '1.0', {'packages':['corechart']});

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawBarChart(chosen_url) {

 var jsonData = $.ajax({
  url: chosen_url,
  dataType:"json",
  async: false
}).responseText;
 
  // Create our data table out of JSON data loade d from server.
  var data = new google.visualization.DataTable(jsonData);

  var w = 0.5*(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  var h = 0.5*(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
  // Set chart options
  var options = {'width':w,'height':h, 'hAxis': {'title': "£m", 'titleTextStyle':{'italic': false}}, 'vAxis': {'textPosition' : 'in', 'textStyle': {'fontSize': 12}}, 'orientation': 'vertical', 'legend': { position: 'none' }, 'chartArea': {'top': 0, 'left': 4}};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
  chart.draw(data, options);
}




// pie chart

function drawPieChart(chosen_url) {

  var jsonData = $.ajax({
  url: chosen_url,
  dataType:"json",
  async: false
}).responseText;


  // Create our data table out of JSON data loaded from server.
  var data = new google.visualization.DataTable(jsonData);

  var w = 0.5*(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  var h = 0.5*(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
  // Set chart options
  var options = {'width':w,'height':h,'is3D':true,'chartArea': {'left': 0, 'top': 0} };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
  chart.draw(data, options);
}



// gauge chart

google.load("visualization", "1", {packages:["gauge"]});
google.setOnLoadCallback(drawChart);

function drawChart() {

  var dataTrue = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Work (m)', 170.6]
      ]);

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ["Work (m)", 0]
  ]);

  var options = {
    max: 200,
    min: 0,
    width: 350, height: 350,
    redFrom: 160, redTo: 180,
    yellowFrom:180, yellowTo: 200,
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
