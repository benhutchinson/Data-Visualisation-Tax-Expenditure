$( document ).ready(function() {
  // $(".chart").on("click", function() {
  //   $(".full-chart").toggleClass("full-chart")
  //   $(this).toggleClass("full-chart", function(){
  //     $(this).toggleClass("chart")
  //   })
  // });
  drawBarChart('json/top_10_google_format.json');
  drawPieChart('json/top_10_google_format.json');

  $("#bar-pie-link").on("click", function() {
      $("#bar-pie-div").css({"display":"block"});
      $("#pie_chart").show();
      $("#gauge_chart").hide();  
    });

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
      $("#bar-pie-div").hide();
	    $("#gauge_chart").show();
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
