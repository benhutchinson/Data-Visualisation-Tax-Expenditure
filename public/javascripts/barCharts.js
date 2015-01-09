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

	var margin = {top: 20, right: 30, bottom: 30, left: 100};
	var width = 960 - margin.left - margin.right,            //960 - 40 - 30 = 890
			height = 500 - margin.top - margin.bottom;           //500 - 20 - 30 = 450

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .25)
		.domain(spendingData.map(function(d) {return d.department; }))
		// .rangeBand([0, width]);

	var y = d3.scale.linear()
		.range([height, 0])
	  .domain([0, d3.max(spendingData, function(d) { return d.spend; })]);



	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom');

	var yAxis = d3.svg.axis()
		.scale(y)
		.ticks(10)
		.tickFormat( function(d) { return "£" + d } )
		.orient('left');
    // .ticks(10, "%")

	var chart = d3.select(".chart")
		.attr('width', width + 2*(margin.left + margin.right)) // 
		.attr('height', height + 9*(margin.top + margin.bottom)) // height + margin.top + margin.bottom = 450 + 50 = 500
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		chart.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + (height) + ")")
			.call(xAxis)
			.selectAll('text')
				.attr('y', 0)
				.attr('x', 9)
				.attr('dy','.35em')
				.attr('transform', 'rotate(45)')
				.style('text-anchor','start')
			;

		chart.append('g')
			.attr("class", "y axis")
			.call(yAxis)
				// .append('text')
				// // .attr('transform','rotate(-90)')
				// .attr('y', -15)
				// .attr('dy','.71em')
				// .style('text-anchor','end')
				// .text('Expenditure');
				



		chart.selectAll('.bar')
			.data(spendingData)
			.enter().append('rect')
			.attr('class', 'bar')
			.attr('x', function(d) {return x(d.department) ;})
			.attr('y', function(d) {return height - (d.spend)*(0.000001) ;})
			.attr('height', function(d){ return (d.spend)*(0.000001); })
			.attr('width', x.rangeBand());


		function type(d) {
			d.spend = +d.spend;
			return d;
		}



});
