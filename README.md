Tax-Data-Visualization
======================

We were set a data visualisation challenge with the aim to provide a visual representation of UK public spending data for tax payers.  HM Treasury freely provides a quarterly breakdown of financial expenditure, aggregating expenditure across departments.  We decided to take advantage of this dataset and see if we could extend the data visualisation examples that the government provides on the [Cabinet Office web-site.](http://www.gist.cabinetoffice.gov.uk/oscar/2013-14/).  We have chosen to take advantage of charting libraries such as D3.js in this project.


###The Data
The government has been starting to publish data according to a new reporting system called OSCAR, an "Online System for Central Accounting and Reporting".  This is a cross-government project that we were kindly pointed towards by [Camille Baldock from gov.uk](https://github.com/camilleldn)
that aims to simplify government data for public reporting.  The data-set is the basis of the Cabinet Office web-site visualisations above, so we have used the [open CSV data as the basis for our project.](http://www.gist.cabinetoffice.gov.uk/oscar/2013-14/)


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


###Lessons Learned


* d3 ; struggled with negative on one library.  hence scope of project morphs to those that have net expenditure at aggregate level.................
* google gauge: All code and data are processed and rendered in the browser. No data is sent to any server.
wouldn't handle json
--- google gauge call-back. managed to fix arrayData vs google data reqs.

* Initiative.  There was a lot of data available from [data.gov.uk](http://data.gov.uk) and in a short-project, a lot of time can be easily wasted without direction.  Chris on our team contacted  Camille Baldock from gov.uk](https://github.com/camilleldn) who gave us a talk and she pointed us towards gist.  Ideas & initiative are worth their weight in gold.

![Camille's Help](https://github.com/benhutchinson/tax-visual/blob/master/public/images/camille.png)

* How much new technology do you need to absorb?  The core of this project involved learning about data visualisation technologies and we just needed to link data to javascript via a simple view.  Time was wasted appraising new frameworks that offered little beyond what we already knew, struggling to integrate them, and alienating half the team.
* Schoolboy errors.  Even small inefficiencies such as team members coming in at different times cost us a lot of dead time.  

###Libraries
* [D3.js](http://d3js.org)
* [Google Charts](https://developers.google.com/chart/interactive/docs/gallery)