Tax-Data-Visualization
======================

We were set a data visualisation challenge with the aim to provide a visual representation of UK public spending data for tax payers.  HM Treasury freely provides a quarterly breakdown of financial expenditure, aggregating expenditure across departments.  We decided to take advantage of this dataset and see if we could extend the data visualisation examples that the government provides on the [Cabinet Office web-site.](http://www.gist.cabinetoffice.gov.uk/oscar/2013-14/)  We have chosen to take advantage of charting libraries such as Google Charts and D3.js in this project.  Our project is [hosted here on Heroku.](https://taxvisuals.herokuapp.com/)


TO DO 
>>> tests
>>> responsive re google charts.
>>> design: e.g. one nav vs 3 lines, vertical alignment, the gauge on reveal
>>> john's data option
>>> d3....
>>> data source on page
>>> john data as api
>>> structure bit of a talk, reference gist
>>> vertical centering
>>> "about" drop down



###The Data
The government has been starting to publish data according to a new reporting system called OSCAR, an "Online System for Central Accounting and Reporting".  This is a cross-government project that we were kindly pointed towards by [Camille Baldock from gov.uk](https://github.com/camilleldn) that aims to simplify government data for public reporting.  The data-set is the basis of the Cabinet Office web-site visualisations above, so we have used the [open CSV data as the basis for our project.](http://www.gist.cabinetoffice.gov.uk/oscar/2013-14/)


###Roadmap & Plan
Our basic goal and starting minimal viable product aims at providing a visual expenditure breakdown for each government deparmtment in the UK, using the 2013-14 dataset.  To extend the project, we are hoping to offer multiple graphic and charting options and allow the user the ability to take a more granular look at department-level expenditure.  We will then hope to animate the graphics and allow the users to share the charts via Twitter, Facebook, etc.  If time allows, we will look at multi-year datasets and providing our data or filtering the data as a standard API.


###How We Approach The Project
We have decided to split this project into front-end and back-end responsibilities.  One team will take responsibility for accessing the data and essentially developing an API for the project.  Another team will start using mock-data to build the front-end visualisations and become familiar with D3.  We agreed on the basic format of the data at the outset so that the two teams' work could be easily integrated and wired together.


###Ideas & Inspiration
There are plenty of examples on the D3.js web-site, but we thought the following had interesting visual impact
* [New York Times: Facebook IPO: The chart animates in effectively through a dynamic y-axis.](http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html)
* [New York Times: Obama Budget Proposal: This offers different visual options, grouping the data according to different criteria](http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html)
* [D3 Pack Hierarchy: Zoom-In On Chosen Datasets & Circles](http://mbostock.github.io/d3/talk/20111116/pack-hierarchy.html)
* [Google Charts: Gauge: This is just a bit quirky and takes us outside of circles and charts, and also outside D3.js](https://google-developers.appspot.com/chart/interactive/docs/gallery/gauge)
* [How many ways could we group and colour data?](http://tomsisk.com/ondemand/)


###Twitter Card Integration
Allowing users to share images individually with Twitter is possible via "Twitter Cards" but we initially struggled to align this to our individual charts due to the way Google Charts embeds and computers the charts on the page.  As a result, we learnt how to align a more generic image to tweets that users share which would more effectively brand our content when our web page is promoted.


<img src="https://github.com/benhutchinson/tax-visual/blob/master/public/images/sampletweetcard.png" align="center" style="display: block" width="400px" height="399px"/>
<br />


###Lessons Learned

* Data & formats.  Google charts need to be fed data in a specific format, either hardcoded in this format into the Javascript or pre-formatted in an external JSON file.  This took us time, but we learned how to feed Google data from this and hence were able to use one JSON file as the base for a number of chart views.  Equally, some libraries struggle with negative values such as pie charts.  We learnt that working with external data libraries and external charting engines is not always a plug-and-play experience.  Time spent analysing the data requirements on both sides at the outset can be well-spent.

```javascript
        var jsonData = $.ajax({
          url: "json/google_corecharts_format_data.json",
          dataType:"json",
          async: false
          }).responseText;
              
        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(jsonData);
```

```javascript

{
  "cols": [
        {"id":"","label":"Department","pattern":"","type":"string"},
        {"id":"","label":"Expense","pattern":"","type":"number"}
      ],
  "rows": [
        {"c":[{"v":"Welsh Assembly Government","f":null},{"v":33120744,"f":null}]},
        {"c":[{"v":"Department for Work and Pensions","f":null},{"v":380442986,"f":null}]}
}

```

* Initiative.  There was a lot of data available from [data.gov.uk](http://data.gov.uk) and in a short-project, a lot of time can be easily wasted without direction.  Chris on our team contacted  Camille Baldock from gov.uk](https://github.com/camilleldn) who gave us a talk and she pointed us towards gist.  Ideas & initiative are worth their weight in gold.

...<img src="https://github.com/benhutchinson/tax-visual/blob/master/public/images/camille.png" align="center" style="display: block" width="500px" height="249px"/>
<br />


* How much new technology do you need to absorb?  The core of this project involved learning about data visualisation technologies and we just needed to link data to javascript via a simple view.  Time was wasted appraising new frameworks that offered little beyond what we already knew, struggling to integrate them, and alienating half the team.

* Schoolboy errors.  Even small inefficiencies such as team members coming in at different times cost us a lot of dead time. 

* MVP.  It is always worth trying to learn to walk before you run. Google Charts seemed to meet our MVP needs quicker than D3, even if D3 arguably offers more creative and interesting solutions for the longer-term.

###Libraries
* [Google Charts](https://developers.google.com/chart/interactive/docs/gallery)
* [D3.js](http://d3js.org)

###Code Climate
[![Code Climate](https://codeclimate.com/repos/54ae4c17695680468b0074ca/badges/54d6e436928948043908/gpa.svg)](https://codeclimate.com/repos/54ae4c17695680468b0074ca/feed)