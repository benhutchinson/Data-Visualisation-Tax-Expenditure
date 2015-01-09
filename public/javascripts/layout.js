$( document ).ready(function() {
  // $(".chart").on("click", function() {
  //   $(".full-chart").toggleClass("full-chart")
  //   $(this).toggleClass("full-chart", function(){
  //     $(this).toggleClass("chart")
  //   })
  // });
  drawBarChart('json/google_corecharts_format_data.json');
  drawPieChart('json/google_corecharts_format_data.json');

  $("#pie-link").on("click", function() {
	  	$("#pie_chart").css({"display":"block"});
	    $("#bar_chart").hide();
	    $("#gauge_chart").hide();
    });

  $("#bar-link").on("click", function() {
	  	$("#pie_chart").hide();
	    $("#bar_chart").show();
	    $("#gauge_chart").hide();
    });

	$("#gauge-link").on("click", function() {
	  	$("#pie_chart").hide();
	    $("#bar_chart").hide();
	    $("#gauge_chart").show();
	});

  $("#top-10").on("click", function(){
    drawBarChart('json/google_corecharts_format_data.json');
    drawPieChart('json/google_corecharts_format_data.json');
  });

  $("#top-20").on("click", function(){
    drawBarChart('json/top_15_and_other_google_format.json');
    drawPieChart('json/top_15_and_other_google_format.json');
  });

});
