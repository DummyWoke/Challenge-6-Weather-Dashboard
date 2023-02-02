const apikey = "6fb2b354c822933f6fd35ad30af473fe"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function LoadForecast() {

    console.log("Forecast Request Successful");

    let lon = "39.9527237";
    let lat = "-75.1635262"; 
fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+apikey+"&units=imperial&exclude=hourly,minutely,alerts")
.then(response => response.json())
    .then(data => {

        //console.log(data);
        console.log(data)

        for (let datecounter = 5; datecounter < 10; datecounter++) {

            console.log(datecounter)

        var date = (new Date(data.list[datecounter].dt_txt));
    
        $(".Weather"+(datecounter)+" > .Date").text(date);
        
        var temp = ("Temp: "+(data.list[datecounter].main.temp)+"°F");
        $(".Weather"+(datecounter)+" > .Temp").text(temp);
     
        var wind = ("Wind Speed: "+(data.list[datecounter].wind.speed)+" MPH");
        $(".Weather"+(datecounter)+" > .Wind").text(wind);
       
        var humidity = ("Humidity: "+(data.list[datecounter].main.humidity)+"%");
        $(".Weather"+(datecounter)+" > .Humidity").text(humidity);
        
        }
    })
};

function CitySearch(cityinput)
{
    console.log("City Search Successful")

    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+cityinput+"&limit=5&appid="+apikey+"&units=imperial")
    .then(response => response.json())
    .then(data => {

    var place = data[0].name;

    var latitude = data[0].lat;

    var longitude = data[0]["lon"];

    CurrentWeatherSearch(latitude,longitude)
    })

    .catch(error => 
        {console.error("API call error")

    console.log(error)
    })

}

function CurrentWeatherSearch(latitude,longitude){

    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+apikey+"&units=imperial")
    .then(response => response.json())
    .then(data =>{
    
        
     var location = data["name"];
     console.log(location)

     var temp = ("Temp: "+(data["main"]["temp"])+"°F");
     console.log(temp)

     var wind = ("Wind Speed: "+(data["wind"]["speed"])+" MPH");
     console.log(wind)

     var humidity = ("Humidity: "+(data["main"]["humidity"])+"%");
     console.log(humidity)
    


    console.log("Longitude: "+longitude)
    console.log("Latitude: "+latitude)

    $(".CityDisplay > .City").text(location);
    $(".CityDisplay > .Temp").text(temp);
    $(".CityDisplay > .Wind").text(wind);
    $(".CityDisplay > .Humidity").text(humidity);

    })

}

//Blocked out feature
/*function CityCount(cityinput){

        if (order == 0) {
        localStorage.setItem("City1", cityinput); 
        order++;
        console.log(order)
        }

        else if (order == 1){
        localStorage.setItem("City2", cityinput);
        order++;
        console.log(order)
        }

        else if (order == 2){
        localStorage.setItem("City3", cityinput);
        order ++
        console.log(order)
        }

        else if (order == 3){
        localStorage.setItem("City4", cityinput);
        order = 0
        console.log(order)
        } 

}*/

$(document).ready(function(){
    LoadForecast();
});

$(document).ready(function () {
    console.log("ready")
    // saveBtn click listener 
    $(".searchbutton").on("click", function () {
        // Get nearby values of the description in JQuery
        
        console.log ("Searching For City Weather")

        var cityinput = $(this).siblings("#cityinput").val();
       
        //CityCount(cityinput); Blocked out feature

        CitySearch(cityinput);

    })
})
