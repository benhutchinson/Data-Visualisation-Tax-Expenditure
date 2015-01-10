Tax-Data-Visualization
======================

We were set a data visualisation challenge with the aim to provide a visual representation of UK public spending data for tax payers.  HM Treasury freely provides a quarterly breakdown of financial expenditure, aggregating expenditure across departments.  We decided to take advantage of this dataset and see if we could extend the data visualisation examples that the government provides on the [Cabinet Office web-site.](http://www.gist.cabinetoffice.gov.uk/oscar/2013-14/)  We have chosen to take advantage of charting libraries such as Google Charts and D3.js in our project to render the graphics and also embedded a Twitter card to enable users to share details of our web-site in a branded fashion.

###How You Can Use Our Web-Site Now
Our project is [hosted here on Heroku](https://taxvisuals.herokuapp.com/) and we have made our filtered data [available as a JSON API here.](https://taxvisuals.herokuapp.com/json/api.json)  On initial load, you are presented with a series of circles and bubbles whose area corresponds to an individual department's relative level of expenditure.  The chart is rendered as a scalable vector graphic through D3.js.  You can click on the circles either in the chart or in the legend and will see the corresponding element fade in and out.  You can immediately tweet and share the web-site by clicking the twitter icon in the upper-right corner of the screen and, provided you are logged-in to Twitter, you will be presented with a pre-populated tweet box.  This allows you to share details of our site to your followers within 2 clicks.  A tweet similar to that illustrated below subsequently loads in your timeline; an additional graphic is clearly appended that advertises our web-site a little more thoroughly.  

The page also has two other links offering more insight into the numerical data.  Clicking on the first link will reveal a speedometer graphic and the second, a pie-chart.  Behind the scenes, AJAX technology allows us to send our data series to Google Charts and have the Google API render a scalable vector graphic on the page.  Users can choose to be presented with either the 'top 10' or 'top 15' departments, each data series represented by a separate JSON file hosted on our server.  Users can choose to have this data presented to them either as a pie or bar chart by simply clicking the appropriate links on the page.

<img src="https://github.com/benhutchinson/tax-visual/blob/master/public/images/sampletweetcard.png" align="center" style="display: block" width="400px" height="399px"/>
<br />


###How We Approached The Project
Our minimal viable product aimed at providing a visual breakdown of 2013-14 UK government expenditure.  We decided to split the project into front-end and back-end responsibilities.  One team took responsibility for processing the raw data into a JSON API that we could use to serve our web-site while the other team started out with mock-data to build front-end visuals and become familiar with the workings of D3.js and Google.  The format of the data was important in order that the two teams' work could be easily integrated and wired together.  An additional level of processing was required to ensure compatibility with Google Charts.  To extend our product, we made our data accessible through a JSON API and offered users the ability to easily market our site and share it via branded tweets.


###The Data
The UK government has been starting to publish data according to a new reporting system called OSCAR, an "Online System for Central Accounting and Reporting".  This is a cross-government project that we were kindly pointed towards by [Camille Baldock from gov.uk](https://github.com/camilleldn) that aims to simplify government data for public reporting.  The data-set we have processed should be the same data-set that underpins the [Cabinet Office web-site visualisations, an open CSV data set linked at the base of the page.](http://www.gist.cabinetoffice.gov.uk/oscar/2013-14/)


###Ideas & Inspiration
The illustrations through these links also illustrate how we might take our project further with a more advanced understanding of D3.js.
* [New York Times: Facebook IPO: Dynamic y-axis transformations.](http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html)
* [New York Times: Obama Budget Proposal: Data grouped according to different criteria](http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html)
* [D3 Pack Hierarchy: Zoom-in for more granular information on chosen datasets & circles](http://mbostock.github.io/d3/talk/20111116/pack-hierarchy.html)
* [Google Charts: Gauge: Quirky but a nice departure from circles and charts and outside D3.js](https://google-developers.appspot.com/chart/interactive/docs/gallery/gauge)
* [How many ways could we group and colour the data we present?](http://tomsisk.com/ondemand/)


###Code Extracts: D3 

Please note that full extracts can be found in the ```bubble-chart.js``` file within the ```public/javascripts``` folder in this repository.

```
var chart = d3.selectAll(".chart")
  .style({'stroke': 'black', 'stroke-width': '2', 'width': chartWidth, 'height': chartHeight})
  .append("g")
  .attr("id", "circles");

var totalSpend = chart.append("g")
  .attr("id", "total");

totalSpend.append("circle")
  .attr("r", function() {return (Math.sqrt(totalRadius) * (chartHeight * 0.0025));})
  .attr("cx", function() {return (chartWidth / 2.7);})
  .attr("cy", function() {return (chartHeight / 2 );})
  .attr("id", "totalSpend");
```

###Code Extracts: Linking Google Charts To Our Data

Please note that full extracts can be found in the ```googlecharts.js``` and ```layout.js``` files with the ```public/javascripts``` folder in this repository.

```javascript
  var jsonData = $.ajax({
    url: "json/google_corecharts_format_data.json",
    dataType:"json",
    async: false
    }).responseText;
        
  var data = new google.visualization.DataTable(jsonData);
```


###Code Extracts: JSON Data In Google's DataTable Format

```javascript

{
  "cols": [
  {"id":"","label":"Department","pattern":"","type":"string"},
  {"id":"","label":"Expense","pattern":"","type":"number"}
  ],
  "rows": [
  {"c":[{"v":"Department for Business Innovation and Skills","f":null},{"v":32.715,"f":null}]},
  {"c":[{"v":"Department for Communities and Local Government","f":null},{"v":33.910,"f":null}]},
  {"c":[{"v":"Welsh Assembly Government","f":null},{"v":16.078,"f":null}]},
  {"c":[{"v":"Department for Work and Pensions","f":null},{"v":170.579,"f":null}]},
  {"c":[{"v":"Department of Health","f":null},{"v":115.398,"f":null}]},
  {"c":[{"v":"HM Revenue and Customs","f":null},{"v":46.562,"f":null}]},
  {"c":[{"v":"Scottish Government","f":null},{"v":34.739,"f":null}]},
  {"c":[{"v":"Ministry of Defence","f":null},{"v":43.340,"f":null}]},
  {"c":[{"v":"Northern Ireland Executive","f":null},{"v":19.849,"f":null}]},
  {"c":[{"v":"Department for Education","f":null},{"v":56.749,"f":null}]}
  ]
}

```


###Code Extracts: Twitter Cards

``` html
  <meta name="twitter:card" content="photo" />
  <meta name="twitter:site" content="@gspend" />
  <meta name="twitter:title" content="Makers Academy : Data Visualisation Project" />
  <meta name="twitter:image" content="https://taxvisuals.herokuapp.com/images/number10.jpg" />
  <meta name="twitter:url" content="https://taxvisuals.herokuapp.com/" />
```

``` html
<a href="https://twitter.com/intent/tweet?url=https://taxvisuals.herokuapp.com/;text=check out our awesome data visualisations" onclick="javascript:void window.open('https://twitter.com/intent/tweet?url=https://taxvisuals.herokuapp.com/;text=check out our awesome data visualisations','1420732250022','width=550,height=253,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0');return false;">
<img id="tweet-image" src="images/tweet.png"></a>
```

###Some Lessons Learned

* Data & formats:  We learnt that working with external data libraries and external charting engines is not always a plug-and-play experience.  For example, Google Charts needs to be fed data in a specific format, either hardcoded in the Javascript calls or pre-formatted in an external JSON file.  This took time, but we learned how to feed Google data and hence were ultimately able to allow users to choose different data series, deploying different JSON files to render multiple chart views on the fly.  Time spent analysing the data requirements on both sides at the outset is time well-spent.


* Initiative:  There was a lot of data available from [data.gov.uk](http://data.gov.uk) and in a short-project, a lot of time can be easily wasted without direction.  Chris on our team contacted [Camille Baldock from gov.uk](https://github.com/camilleldn) who gave a talk at Makers Academy and she pointed us towards the latest government initiatives and data series.  Ideas & initiative are worth their weight in gold.

<img src="https://github.com/benhutchinson/tax-visual/blob/master/public/images/camille.png" align="center" style="display: block" width="500px" height="249px"/>
<br />


* Twitter: Allowing users to share images individually with Twitter is possible after you have set up and had Twitter authorise your "Twitter Cards."   We initially struggled to align tweets to the individual charts in our projects due to the way Google Charts embeds and computes the charts on the page.  As a result, we learnt how to align a more generic image to tweets that users share to more effectively brand our site when our web page is promoted.  A major takeaway from this project has been both the power and constraints external services impose.  It is no coincidence that the nicest looking chart is one our team has rendered and coded with Javascript and D3.  It is equally no coincidence that the most flexible charts come from Google.

* How much new technology do you need to absorb?  The core of this project involved learning about data visualisation technologies and the requirements on our server were relatively minimal.  We just needed our server to present a simple view linked to CSS, Javascript assets, and external API services.  Sinatra was light, offered familiarity, lots of support, speed, and met our needs.  Time was wasted appraising new frameworks that offered little beyond what we already knew, struggling to integrate them, and alienating half the team.

* Minimum Viable Product:  It is always worth trying to learn to walk before you run. Google Charts seemed to meet our MVP needs quicker than D3, even though D3 arguably offers more creative and interesting solutions for the longer-term.

* Schoolboy Errors:  Small inefficiencies such as team members coming in at different times can result in a lot of dead time. 

###Libraries
* [Google Charts](https://developers.google.com/chart/interactive/docs/gallery)
* [D3.js](http://d3js.org)

###Code Climate
[![Code Climate](https://codeclimate.com/repos/54ae4c17695680468b0074ca/badges/54d6e436928948043908/gpa.svg)](https://codeclimate.com/repos/54ae4c17695680468b0074ca/feed)

###Team Members
* [Daniel Obembe](https://github.com/ayoobembe)
* [John Kiely](https://github.com/JKiely)
* [Alan Bridger](https://github.com/abridger)
* [Chris Batts](https://github.com/chrisjbatts)
* [Ben Hutchinson](https://github.com/benhutchinson)