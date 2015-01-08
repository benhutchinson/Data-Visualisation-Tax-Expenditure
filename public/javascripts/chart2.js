$( document ).ready(function() {

	var spendingData = [
		{
			"department":"Welsh Assembly Government",
			"spend":33120744
		},
		{
			"department":"Department for Work and Pensions",
			"spend":380442986
		},
		{
			"department":"Department of Health",
			"spend":253767532
		},
		{
			"department":"HM Revenue and Customs",
			"spend":105838566
		},
		{
			"department":"Department for Business Innovation and Skills",
			"spend":32133570
		},
		{
			"department":"Scottish Government",
			"spend":73984853
		},
		{
			"department":"Department for Communities and Local Government",
			"spend":63184992
		},
		{
			"department":"Ministry of Defence",
			"spend":88602561
		},
		{
			"department":"Northern Ireland Executive",
			"spend":42666111
		},
		{
			"department":"Department for Education",
			"spend":98040196
		}
	];


	var totalSpending = 0,
		radi = 0;

	var chartWidth = parseInt(d3.select(".chart").style("width"));
	var chartHeight = parseInt(d3.select(".chart").style("height"));

	var chart = d3.select('.chart')
		.style({'stroke': 'black', 'stroke-width': '2', 'width': '100%', 'height': '100%'})
		.attr('width','100%')
		.append('g');

	spendingData.forEach(function(element){
		totalSpending += element['spend'];
	});

	radi = 8 * Math.log(totalSpending);

	var circle = d3.select('.chart g')
		.append('circle')
			.attr('id','circles')
			// .attr("r","100")
			.attr("r", function(){ return parseInt(radi); })
			.attr("cx",560)
			.attr("cy",320)
			.style('fill','none');

	var text = d3.select('.chart g')
		.append('text')
		.text('Total Spending')
			.attr("x", 515)
			.attr('y', 330)
			.style('font-family','sans-serif');


});