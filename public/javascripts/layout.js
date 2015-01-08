$( document ).ready(function() {
  // $(".chart").on("click", function() {
  //   $(".full-chart").toggleClass("full-chart")
  //   $(this).toggleClass("full-chart", function(){
  //     $(this).toggleClass("chart")
  //   })
  // });


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


});
