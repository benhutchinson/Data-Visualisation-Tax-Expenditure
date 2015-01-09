$( document ).ready(function() {

  drawBarChart('json/top_10_google_format.json');
  drawPieChart('json/top_10_google_format.json');

  $("#bar-pie-link").on("click", function() {
      $("#bar-pie-div").slideDown(2000);
      $("#pie_chart").show();
    });

  $("#pie-link").on("click", function() {
	  	$("#pie_chart").css({"display":"block"});
	    $("#bar_chart").hide();
    });

  $("#bar-link").on("click", function() {
	  	$("#pie_chart").hide();
	    $("#bar_chart").show();
    });

	$("#gauge-link").on("click", function() {
     $("#gauge_chart").slideDown(2000);
	});

  $("#top-10").on("click", function(){
    drawBarChart('json/top_10_google_format.json');
    drawPieChart('json/top_10_google_format.json');
  });

  $("#top-20").on("click", function(){
    drawBarChart('json/top_15_google_format.json');
    drawPieChart('json/top_15_google_format.json');
  });

});
