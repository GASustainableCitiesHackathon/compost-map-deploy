# Compostrack
Website: https://compostrack.netlify.app/

Aiming to encourage composting and sustainable practices in New York City, Compostrack makes food scrap drop off sites information more accessible in a map view, and provides users a view into their personal and their city's environmental inpact.

## Technologies Used

Compostrack was built using `JavaScript` and `React.js`, and styled using `React Bootstrap`, `Styled Divs` and `Axios` for API Requests.
Comthattrack utilizes NYC's Open data for Food Scrap Drop-Off Locations via [Socrata's Open Data API](https://dev.socrata.com/foundry/data.cityofnewyork.us/if26-z6xq) along with [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/) to allow users to view NYC's Frood Scrap Drop Off Locations, information on the locations such as hours of operation, website and contact information by selecting the map icon. Compostrack also has a robust [API](https://github.com/GASustainableCitiesHackathon/compost) built with MongoDB and Express.js that currently allows users to sign-in and add submit their the Qty (in Lbs) of food scrap that they dropped off at a selected drop-off location. But has the potential to display an incredible ammount of analytics.

### Future Deployment Plans

- [ ] When users check submit their scrap, it will also save that weight in their users data, allowing uers to track their personal conservation efforts.
- [ ] A compost drop-off tab in the nav bar so that users can utilize check in functionality without selecting a site on the map.
- [ ] The Nav will also hold anaytics on conservation trends over time and overll statistics on performace versus average.
- [ ] Incorporate Other Data Sources and Analytics

- [DSNY Monthly Tonnage Data](https://data.cityofnewyork.us/City-Government/DSNY-Monthly-Tonnage-Data/ebb7-mvp5). \*Monthly collection tonnages that the Department of Sanitation collects from NYC residences and institutions.
- [DSNY Waste Characterization: Comparison Table](https://data.cityofnewyork.us/Environment/DSNY-Waste-Characterization-Comparison-Table/sx92-yn4a). _The Department conducted the 2017 NYC Residential, School, and NYCHA (NYC Housing Authority) Waste Characterization Study over three seasons: spring, summer, and fall. This study builds on decades of research and analysis into the evolving composition of NYC's waste stream. DSNY conducted previous waste characterization studies in 1990, 2005, and 2013. Each of these studies share a similar methodology of waste sampling and sorting but also included different targeted analyses to characterize particular components of the waste stream._
- [DSNY Other Organics Collection Tonnages](https://data.cityofnewyork.us/Environment/DSNY-Other-Organics-Collection-Tonnages/6yag-pnij). _Annual tons of food scraps dropped off at Green Markets and NYC Compost Project Partners. Also includes other deliveries of organics including leaf and wood wastes to NYC Compost Project Partners. _

If this data were accessible within Compostrack's platform, there is outstanding potential for analytics that can be presented. For example: In January 2021, 200,000 tonnes of refuse was collected from New York City Sanitation, in 2020 the average collection from food scrap sites was 166 tons, or .1% of NYC's total refuse. The last recorded data from NYC's food comparison data shows that 20% of NYC's refuse was Food Waste. If we can present results or users contributions we can show users a piece of their carbon footprint, by giving them a tracking of their personal sustainability journey, and Compostrack and provide data on which Food scrap collection sites collect the most food scraps which can be leveraged to be more strategic about devleopment of food scrap collection sites.
