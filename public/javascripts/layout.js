$( document ).ready(function() {
  $(".chart").on("click", function() {
    $(".full-chart").toggleClass("full-chart")
    $(this).toggleClass("full-chart", function(){
      $(this).toggleClass("chart")
    })
  });
});
