//XML_HTTP request(XHR)
//They are used to intract with the server via API
//step 01:
//create a XHR object
var request= new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload= function(){
    var res = JSON.parse(request.response);
    console.log(res);
// Print the Regions of all 250 countries
for(var i =0;i<res.length;i++)
{
console.log(res[i].region)
}
// TO Get all the countries from Asia continent /region using Filter method
var regionData = res.filter((ele)=>ele.region == "Asia");
console.log(regionData);

// Get all the countries with a population of less than 2 lakhs using Filter method.
var population = res.filter((ele)=>ele.population < "200000")
console.log(population)

//Print the following details name, capital, flag, using forEach method.

//Print the total population of countries using reduce method.
var totalPopulation = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(totalPopulation)

//Print the country that uses US dollars as currency.





// name of the countries in europe
var countryName = res.filter((ele)=>ele.region == "Europe");
var countryNameEurope = countryName.map((ele)=>ele.name.common);
console.log(countryNameEurope);




}